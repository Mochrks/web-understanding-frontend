'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Download, X, File } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Title } from '@/components/demo/Title'

interface FileItem {
    name: string
    content: string
    size: number
}

export default function FileUploadDownload() {
    const [files, setFiles] = useState<FileItem[]>([])
    const [dragActive, setDragActive] = useState(false)
    const [multipleFiles, setMultipleFiles] = useState<File[]>([])
    const [uploadProgress, setUploadProgress] = useState(0)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const storedFiles = localStorage.getItem('uploadedFiles')
        if (storedFiles) {
            setFiles(JSON.parse(storedFiles))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('uploadedFiles', JSON.stringify(files))
    }, [files])

    const handleFileUpload = (uploadedFiles: FileList | null) => {
        if (uploadedFiles) {
            setUploadProgress(0)
            const totalFiles = uploadedFiles.length
            let processedFiles = 0

            Array.from(uploadedFiles).forEach(file => {
                const reader = new FileReader()
                reader.onload = (e) => {
                    const content = e.target?.result as string
                    setFiles(prev => [...prev, { name: file.name, content, size: file.size }])
                    processedFiles++
                    setUploadProgress((processedFiles / totalFiles) * 100)
                }
                reader.readAsDataURL(file)
            })
        }
    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files)
        }
    }

    const handleMultipleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles).slice(0, 5)
            setMultipleFiles(filesArray)
        }
    }

    const uploadMultipleFiles = () => {
        handleFileUpload(multipleFiles as unknown as FileList)
        setMultipleFiles([])
    }

    const downloadFile = (file: FileItem) => {
        const link = document.createElement('a')
        link.href = file.content
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const removeFile = (fileName: string) => {
        setFiles(files.filter(file => file.name !== fileName))
    }

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const openFileDialog = () => {
        fileInputRef.current?.click()
    }

    return (
        <>
            <div className='mt-10 mb-10'>
                <Title name="Screen File Upload Download" />
            </div>
            <div className="container mx-auto p-4">
                <Tabs defaultValue="button" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="button">Button Upload</TabsTrigger>
                        <TabsTrigger value="dragdrop">Drag & Drop</TabsTrigger>
                        <TabsTrigger value="multiple">Multiple Upload</TabsTrigger>
                    </TabsList>
                    <TabsContent value="button">
                        <Card>
                            <CardHeader>
                                <CardTitle>Button Upload</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Input
                                    type="file"
                                    onChange={(e) => handleFileUpload(e.target.files)}
                                    className="mb-4"
                                />
                                {/* <Button onClick={() => fileInputRef.current?.click()}>
                                <Upload className="mr-2 h-4 w-4" /> Upload File
                            </Button> */}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="dragdrop">
                        <Card>
                            <CardHeader>
                                <CardTitle>Drag & Drop Upload</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    className={`border-2 border-dashed rounded-lg p-8 text-center ${dragActive ? 'border-primary' : 'border-gray-300'
                                        }`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                    onClick={openFileDialog}
                                >
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        onChange={(e) => handleFileUpload(e.target.files)}
                                        className="hidden"
                                    />
                                    <p>Drag and drop your files here or click to select files</p>
                                    {files.length > 0 && (
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold mb-2">Uploaded Files:</h4>
                                            <ul className="text-left">
                                                {files.map((file, index) => (
                                                    <li key={index} className="text-sm">
                                                        <File className="inline mr-2 h-4 w-4" />
                                                        {file.name} ({formatFileSize(file.size)})
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {uploadProgress > 0 && uploadProgress < 100 && (
                                    <Progress value={uploadProgress} className="mt-4" />
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="multiple">
                        <Card>
                            <CardHeader>
                                <CardTitle>Multiple File Upload</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Input
                                    type="file"
                                    multiple
                                    onChange={handleMultipleFileUpload}
                                    className="mb-4"
                                />
                                <Button onClick={uploadMultipleFiles} disabled={multipleFiles.length === 0 || multipleFiles.length > 5}>
                                    <Upload className="mr-2 h-4 w-4" /> Upload Files ({multipleFiles.length}/5)
                                </Button>
                                {multipleFiles.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold mb-2">Selected Files:</h4>
                                        <ul className="text-left">
                                            {multipleFiles.map((file, index) => (
                                                <li key={index} className="text-sm">
                                                    <File className="inline mr-2 h-4 w-4" />
                                                    {file.name} ({formatFileSize(file.size)})
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Uploaded Files</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between mb-2">
                                <span>{file.name} ({formatFileSize(file.size)})</span>
                                <div>
                                    <Button variant="outline" size="icon" className="mr-2" onClick={() => downloadFile(file)}>
                                        <Download className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" onClick={() => removeFile(file.name)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    )
}