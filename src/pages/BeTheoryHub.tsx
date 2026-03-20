import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Terminal, 
  ChevronRight, 
  Activity, 
  Cpu, 
  Code2,
  Search,
  ArrowLeft,
  Menu,
  X,
  Server,
  Lock,
  Workflow,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { beTheoryData, BeTheoryTopic } from '@/data/beTheoryData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const BeTheoryHub = () => {
  const [selectedTopic, setSelectedTopic] = useState<BeTheoryTopic | null>(beTheoryData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectTopic = (topic: BeTheoryTopic) => {
    setSelectedTopic(topic);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get unique categories from data
  const categories = ['All', ...Array.from(new Set(beTheoryData.map(t => t.category)))];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return beTheoryData.length;
    return beTheoryData.filter(t => t.category === category).length;
  };

  const filteredData = beTheoryData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          topic.fullTheory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'OOP Programming': return <Cpu className="w-4 h-4" />;
      case 'ORM & Database': return <Database className="w-4 h-4" />;
      case 'API Engineering': return <Globe className="w-4 h-4" />;
      case 'Data Validation': return <Activity className="w-4 h-4" />;
      case 'Security & Auth': return <Lock className="w-4 h-4" />;
      case 'Infrastructure': return <Server className="w-4 h-4" />;
      case 'System Utilities': return <Workflow className="w-4 h-4" />;
      case 'Fundamentals': return <Terminal className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background text-foreground overflow-hidden relative selection:bg-emerald-500/30">
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter">
           <span className="text-emerald-500">BE</span>_HUB
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-emerald-500/10" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-emerald-500" />
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-full md:w-[400px] bg-background border-r flex flex-col h-screen transition-all duration-500 ease-in-out shadow-2xl lg:shadow-none
        lg:relative lg:translate-x-0 lg:z-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="p-8 border-b flex items-center justify-between bg-emerald-500/[0.02]">
          <Link to="/" className="flex items-center gap-3 font-black text-2xl group tracking-tighter">
             <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                <ArrowLeft className="w-5 h-5 text-white" />
             </div>
             <span>BACKEND_HUB</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-full" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Search & Categories */}
        <div className="p-6 border-b space-y-6 bg-background/40">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-emerald-500 transition-colors" />
            <Input 
              placeholder="Search Backend Mastery..." 
              className="pl-12 h-12 border-0 bg-muted/50 focus-visible:ring-2 focus-visible:ring-emerald-500/50 shadow-inner rounded-2xl text-sm transition-all" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
            {categories.map(cat => (
              <Badge 
                key={cat} 
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`cursor-pointer px-3 py-1.5 flex items-center gap-2 group border-0 shadow-sm transition-all duration-300 active:scale-95 ${
                  activeCategory === cat 
                    ? 'bg-emerald-600 text-white scale-105 shadow-lg shadow-emerald-500/20' 
                    : 'bg-muted/50 hover:bg-emerald-500/10 hover:text-emerald-500'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="text-[10px] uppercase font-bold tracking-widest">{cat}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-background/80 text-muted-foreground'}`}>
                  {getCategoryCount(cat)}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Topic List */}
        <div className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {filteredData.length > 0 ? (
            filteredData.map((topic, index) => (
              <motion.button
                key={topic.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.01 }}
                onClick={() => handleSelectTopic(topic)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border group relative overflow-hidden ${
                  selectedTopic?.id === topic.id 
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-xl shadow-emerald-600/30 scale-[1.02]' 
                    : 'bg-card/30 hover:bg-emerald-500/5 border-transparent'
                }`}
              >
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  selectedTopic?.id === topic.id ? 'bg-white/20 rotate-12 scale-110' : 'bg-secondary group-hover:bg-emerald-500/10 group-hover:text-emerald-500'
                }`}>
                  {getCategoryIcon(topic.category)}
                </div>
                <div className="flex-grow pr-2">
                  <h4 className="font-bold text-sm leading-tight mb-1 uppercase tracking-tight group-hover:translate-x-1 transition-transform">{topic.title}</h4>
                  <p className={`text-[11px] line-clamp-1 font-medium transition-colors ${selectedTopic?.id === topic.id ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {topic.description}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 self-center transition-all duration-300 ${selectedTopic?.id === topic.id ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </motion.button>
            ))
          ) : (
            <div className="text-center py-20 opacity-30 select-none">
              <Search className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <p className="text-sm font-black uppercase tracking-[0.2em] mb-2">No Matching Theory</p>
              <p className="text-[10px] uppercase opacity-60">Try different keywords or category</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow bg-background overflow-y-auto custom-scrollbar scroll-smooth relative">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 md:p-16 lg:p-24 max-w-6xl mx-auto"
            >
              {/* Content Header */}
              <div className="mb-16 space-y-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="bg-emerald-600/10 text-emerald-600 hover:bg-emerald-600/20 border-emerald-600/20 uppercase tracking-[0.3em] text-[10px] py-1.5 px-6 rounded-full font-black">
                    {selectedTopic.category}
                  </Badge>
                </motion.div>
                
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                  {selectedTopic.title}
                </h1>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-800 rounded-full" />
                  <p className="text-xl md:text-3xl text-muted-foreground pl-10 py-2 italic font-serif leading-relaxed opacity-90">
                    "{selectedTopic.description}"
                  </p>
                </div>
              </div>

              <div className="space-y-20">
                {/* Advanced Theory Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-emerald-500/10 pb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
                      <Terminal className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight underline decoration-emerald-500/30 decoration-4">Architectural Wisdom</h3>
                  </div>
                  <div className="prose prose-emerald dark:prose-invert max-w-none">
                    <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground/80 font-medium tracking-tight first-letter:text-6xl first-letter:font-black first-letter:text-emerald-500 first-letter:mr-3 first-letter:float-left">
                      {selectedTopic.fullTheory}
                    </p>
                  </div>
                </section>

                {/* Implementation / Code Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-emerald-500/10 pb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Backend Implementation</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-500/10 transition-all duration-500 hover:shadow-emerald-500/10 group bg-[#0d0d0d]"
                  >
                    <div className="flex items-center justify-between px-8 py-4 bg-white/[0.03] border-b border-white/[0.05]">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">production-ready logic</span>
                    </div>
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={atomDark}
                      customStyle={{ 
                        padding: '2.5rem', 
                        fontSize: '15px', 
                        lineHeight: '1.8',
                        background: 'transparent'
                      }}
                    >
                      {selectedTopic.codeSnippet}
                    </SyntaxHighlighter>
                  </motion.div>
                </section>

                {/* Footer Insight */}
                <footer className="pt-24 pb-12 border-t border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                   <div className="flex flex-col items-center md:items-start gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em]">BE_HUB Master Edition</span>
                      </div>
                      <p className="text-[10px] font-medium tracking-widest text-center md:text-left">© 2026 MOCHRKS — CRAFTED FOR HIGH-PERFORMANCE BACKEND SYSTEMS</p>
                      <a href="https://github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-all flex items-center gap-3 px-5 py-2 bg-muted/50 hover:bg-emerald-500/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                         <GithubIcon className="w-4 h-4" />
                         mochrks / official-repo
                      </a>
                   </div>
                   <Button 
                    variant="ghost" 
                    className="group flex flex-col items-center text-[10px] font-black uppercase tracking-[0.4em] gap-3 text-muted-foreground hover:text-emerald-500 py-8 px-12 rounded-[2rem] hover:bg-emerald-500/[0.02]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   >
                      <ChevronRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-2 transition-transform duration-500" />
                      Back to Top
                   </Button>
                </footer>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6">
              <div className="relative">
                <Server className="w-32 h-32 text-emerald-500/10 animate-pulse" />
                <Workflow className="absolute -top-4 -right-4 w-12 h-12 text-emerald-500/20" />
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Architecture Awaits</h2>
                <p className="text-muted-foreground/60 text-sm max-w-sm mx-auto uppercase tracking-widest leading-loose">Select a backend pillar from the sidebar to begin your architectural journey.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

export default BeTheoryHub;
