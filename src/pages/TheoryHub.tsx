import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Code2, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Search,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { theoryData, TheoryTopic } from '@/data/theoryData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const TheoryHub = () => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(theoryData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on topic selection (for mobile)
  const handleSelectTopic = (topic: TheoryTopic) => {
    setSelectedTopic(topic);
    setIsSidebarOpen(false);
  };

  const categories = ['All', 'Fundamental', 'Core Engineering', 'Architecture', 'Advanced'];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return theoryData.length;
    return theoryData.filter(t => t.category === category).length;
  };

  const filteredData = theoryData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          topic.fullTheory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamental': return <Layers className="w-4 h-4" />;
      case 'Core Engineering': return <Cpu className="w-4 h-4" />;
      case 'Architecture': return <Zap className="w-4 h-4" />;
      case 'Advanced': return <ShieldCheck className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background text-foreground overflow-hidden relative">
      {/* Mobile Header Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2 font-black text-lg tracking-tighter">
           EXPERTISE_HUB
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Sidebar - Theory List */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-full md:w-96 bg-background border-r flex flex-col h-screen transition-transform duration-300 transform
        lg:relative lg:translate-x-0 lg:z-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b flex items-center justify-between bg-secondary/5">
          <Link to="/" className="flex items-center gap-2 font-black text-xl group tracking-tighter">
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             EXPERTISE_HUB
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 border-b space-y-4 bg-background/40">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search architecture..." 
              className="pl-10 h-10 border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary shadow-none rounded-lg text-xs" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Badge 
                key={cat} 
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`cursor-pointer px-2 py-0.5 flex items-center gap-2 group border-0 shadow-sm transition-all ${
                  activeCategory === cat ? 'bg-primary scale-105' : 'bg-muted/50 hover:bg-muted'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="text-[9px] uppercase font-bold tracking-wider">{cat}</span>
                <span className={`text-[8px] px-1 rounded-sm font-mono ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-background/50 text-muted-foreground'}`}>
                  {getCategoryCount(cat)}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2 custom-scrollbar grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
          {filteredData.length > 0 ? (
            filteredData.map(topic => (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-4 border group relative overflow-hidden ${
                  selectedTopic?.id === topic.id 
                    ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-[1.02]' 
                    : 'bg-card/50 hover:bg-muted/80 border-transparent'
                }`}
              >
                {selectedTopic?.id === topic.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary -z-10"
                  />
                )}
                <div className={`p-2 rounded-lg transition-colors ${selectedTopic?.id === topic.id ? 'bg-white/20' : 'bg-secondary'}`}>
                  {getCategoryIcon(topic.category)}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-xs leading-tight mb-1 uppercase tracking-tight">{topic.title}</h4>
                  <p className={`text-[10px] line-clamp-1 font-medium ${selectedTopic?.id === topic.id ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {topic.description}
                  </p>
                </div>
                <ChevronRight className={`w-3 h-3 self-center transition-all ${selectedTopic?.id === topic.id ? 'translate-x-1 opacity-100' : 'opacity-20 group-hover:opacity-100'}`} />
              </button>
            ))
          ) : (
            <div className="text-center py-20 opacity-20">
              <Search className="w-10 h-10 mx-auto mb-2" />
              <p className="text-xs font-bold uppercase tracking-widest">No matching results</p>
            </div>
          )}
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content - Theory Detail & Examples */}
      <main className="flex-grow bg-background overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto"
            >
              <div className="mb-10 space-y-4">
                <Badge className="bg-blue-600 uppercase tracking-widest text-[9px] py-1 px-3">
                  {selectedTopic.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  {selectedTopic.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground border-l-4 pl-6 py-2 italic">
                  "{selectedTopic.description}"
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {/* Teori Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <div className="p-2 bg-muted rounded-lg text-primary">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Penjelasan Teori</h3>
                  </div>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-base md:text-lg leading-relaxed text-muted-foreground">
                    <p>{selectedTopic.fullTheory}</p>
                  </div>
                </section>

                {/* Coding Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <div className="p-2 bg-muted rounded-lg text-primary">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Contoh Kode Dasar</h3>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 hover:shadow-primary/10">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={atomDark}
                      customStyle={{ padding: '1.5rem', fontSize: '13px' }}
                    >
                      {selectedTopic.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                </section>

                <div className="pt-20 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-xs font-mono uppercase tracking-widest">
                   <div className="flex flex-col items-center md:items-start gap-2">
                      <span>© 2026 MOCHRKS Mastery Hub</span>
                      <a href="https://github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-[9px]">
                         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                         github.com/mochrks
                      </a>
                   </div>
                   <Button variant="ghost" className="text-[10px]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      Selesai Membaca? Pin Ke Atas
                   </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <BookOpen className="w-20 h-20 text-muted mb-6" />
              <h2 className="text-xl md:text-2xl font-bold text-muted-foreground uppercase tracking-widest">Select an Architecture Topic</h2>
              <p className="text-muted-foreground text-sm">Master your engineering craft from fundamental to expert.</p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default TheoryHub;
