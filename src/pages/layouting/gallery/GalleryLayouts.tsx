'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Dummy data for gallery items
const galleryItems = [
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiyxpdZmSQEY0hrTegdTNxnoJZHad8oikNQ&s', category: 'nature', title: 'Serene Landscape' },
    { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_4WaU4YO81vxfKv9yShJw6M2JEkvtmwJBfh_dzdeZ1prpOQwJjW17gwppn6aY62WB0Y&usqp=CAU', category: 'portrait', title: 'Urban Portrait' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiyxpdZmSQEY0hrTegdTNxnoJZHad8oikNQ&s', category: 'architecture', title: 'Modern Building' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_4WaU4YO81vxfKv9yShJw6M2JEkvtmwJBfh_dzdeZ1prpOQwJjW17gwppn6aY62WB0Y&usqp=CAU', category: 'nature', title: 'Mountain Vista' },
    { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiyxpdZmSQEY0hrTegdTNxnoJZHad8oikNQ&s', category: 'portrait', title: 'Candid Moment' },
    { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_4WaU4YO81vxfKv9yShJw6M2JEkvtmwJBfh_dzdeZ1prpOQwJjW17gwppn6aY62WB0Y&usqp=CAU', category: 'architecture', title: 'Historic Facade' },
    { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiyxpdZmSQEY0hrTegdTNxnoJZHad8oikNQ&s', category: 'nature', title: 'Coastal Sunset' },
    { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_4WaU4YO81vxfKv9yShJw6M2JEkvtmwJBfh_dzdeZ1prpOQwJjW17gwppn6aY62WB0Y&usqp=CAU', category: 'portrait', title: 'Artistic Silhouette' },
    { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiyxpdZmSQEY0hrTegdTNxnoJZHad8oikNQ&s', category: 'architecture', title: 'Futuristic Design' },
    { id: 10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_4WaU4YO81vxfKv9yShJw6M2JEkvtmwJBfh_dzdeZ1prpOQwJjW17gwppn6aY62WB0Y&usqp=CAU', category: 'nature', title: 'Forest Mist' },
]

// Component 1: Masonry Grid Gallery with Lightbox
const MasonryGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Masonry Gallery</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="mb-4 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.src} alt={item.title} className="w-full rounded-lg" />
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        />
                        <motion.p
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            {selectedImage.title}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// Component 2: Fullscreen Slideshow Gallery
const FullscreenSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-screen overflow-hidden">
            <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white z-10">Fullscreen Slideshow</h2>
            {galleryItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                    <motion.h3
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {item.title}
                    </motion.h3>
                </motion.div>
            ))}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

// Component 3: Horizontal Scrolling Gallery with Parallax
const HorizontalScrollGallery = () => {
    const scrollRef = useRef(null)
    const [scrollX, setScrollX] = useState(0)

    const handleScroll = () => {
        if (scrollRef.current) {
            setScrollX(scrollRef.current.scrollLeft)
        }
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Horizontal Scroll Gallery</h2>
            <div
                ref={scrollRef}
                className="overflow-x-scroll hide-scrollbar"
                onScroll={handleScroll}
            >
                <div className="flex space-x-8" style={{ width: `${galleryItems.length * 300}px` }}>
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative flex-shrink-0 w-72 h-96"
                            style={{
                                transform: `translateX(${scrollX * 0.1 * (index + 1)}px)`,
                            }}
                        >
                            <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0"
                                whileHover={{ opacity: 1 }}
                            >
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    )
}

// Component 4: Grid Gallery with Category Filtering
const FilterableGridGallery = () => {
    const [filter, setFilter] = useState('all')
    const categories = ['all', ...new Set(galleryItems.map(item => item.category))]

    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter)

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Filterable Grid Gallery</h2>
            <div className="flex justify-center space-x-4 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setFilter(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                layout
            >
                <AnimatePresence>
                    {filteredItems.map(item => (
                        <motion.div
                            key={item.id}
                            className="relative aspect-square"
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0"
                                whileHover={{ opacity: 1 }}
                            >
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

// Component 5: Carousel Gallery
const CarouselGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Carousel Gallery</h2>
            <div className="relative w-full max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-lg">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {galleryItems.map((item) => (
                            <div key={item.id} className="w-full flex-shrink-0">
                                <img src={item.src} alt={item.title} className="w-full h-[600px] object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    onClick={prevSlide}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    onClick={nextSlide}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

// Component 6: Polaroid Gallery
const PolaroidGallery = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Polaroid Gallery</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="bg-white p-4 shadow-lg transform rotate-3"
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={item.src} alt={item.title} className="w-64 h-64 object-cover mb-4" />
                        <p className="text-center font-handwriting text-xl">{item.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 7: Infinite Scroll Gallery
const InfiniteScrollGallery = () => {
    const [items, setItems] = useState(galleryItems)
    const containerRef = useRef(null)

    const loadMore = () => {
        const newItems = [...items, ...galleryItems.map(item => ({ ...item, id: item.id + items.length }))]
        setItems(newItems)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore()
                }
            },
            { threshold: 1 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [items])

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Infinite Scroll Gallery</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={item.src} alt={item.title} className="w-full rounded-lg" />
                    </motion.div>
                ))}
            </div>
            <div ref={containerRef} className="h-10" >{/* Intersection observer target */}</div>
        </div>
    )
}

// Component 8: Mosaic Gallery
const MosaicGallery = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Mosaic Gallery</h2>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[800px]">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`rounded-lg overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' :
                            index === 3 ? 'col-span-2' :
                                index === 5 ? 'row-span-2' :
                                    index === 7 ? 'col-span-2' : ''
                            }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 9: Cinemagraph Gallery
const CinemagraphGallery = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Cinemagraph Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.slice(0, 6).map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{item.title}</h3>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-blue-500 mix-blend-color"
                            animate={{ opacity: [0, 0.1, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 10: Before/After Comparison Gallery
const BeforeAfterGallery = () => {
    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Before/After Comparison Gallery</h2>
            <div className="max-w-3xl mx-auto">
                {galleryItems.slice(0, 5).map((item, index) => (
                    <div key={item.id} className="mb-12">
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <div className="relative h-[400px] overflow-hidden">
                            <img
                                src={item.src}
                                alt={`${item.title} - Before`}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                            <div
                                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <img
                                    src={galleryItems[(index + 1) % galleryItems.length].src}
                                    alt={`${item.title} - After`}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                                style={{ left: `${sliderPosition}%` }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPosition}
                                onChange={handleSliderChange}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function GalleryLayouts() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <MasonryGallery />
            <FullscreenSlideshow />
            <HorizontalScrollGallery />
            <FilterableGridGallery />
            <CarouselGallery />
            <PolaroidGallery />
            <MosaicGallery />
            <CinemagraphGallery />
            <BeforeAfterGallery />
            <InfiniteScrollGallery />
        </div>
    )
}