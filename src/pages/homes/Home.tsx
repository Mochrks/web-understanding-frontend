import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ChevronRight,
  Layout,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden pb-32 md:pb-0">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.1),transparent)] transition-opacity duration-500"></div>
      <div className="absolute -bottom-40 -right-40 -z-10 h-[600px] w-[600px] bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.05),transparent)] rounded-full transition-opacity duration-500"></div>

      <div className="container px-4 mx-auto max-w-4xl text-center space-y-12">
        <div className="flex justify-between items-center w-full mb-12">
          <motion.div 
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="flex items-center gap-2"
          >
            <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">MOCHRKS_DEV</span>
          </motion.div>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-12 h-12 shadow-sm border bg-card/50 backdrop-blur-sm hover:bg-muted transition-all">
             {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </Button>
        </div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Architectural Update :: 2026 Mastery
        </motion.div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.1 }}
           className="space-y-6"
        >
          <h1 className="text-4xl md:text-8xl font-black tracking-tight leading-[0.9] text-balance">
            Mastering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500">
              Frontend Architecture.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Elevate your engineering expertise with 100+ professional theories. From core fundamentals to high-level system design—curated for the next generation of Senior Engineers.
          </p>
        </motion.div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link to="/theory">
            <Button size="lg" className="px-12 h-16 text-lg bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/40 group rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95">
              Access Knowledge Hub
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="flex flex-wrap justify-center gap-10 pt-10"
        >
          {[
            { icon: Layout, label: 'Fundamental' },
            { icon: Cpu, label: 'Core Engine' },
            { icon: Zap, label: 'Architecture' },
            { icon: ShieldCheck, label: 'Advanced' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground/40 transition-all hover:text-primary hover:scale-110 cursor-default">
              <item.icon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Decoration */}
      <footer className="absolute bottom-10 flex flex-col items-center gap-2">
         <div className="flex items-center gap-4 text-muted-foreground/30 text-[10px] font-mono tracking-widest uppercase">
            <span>Engineered by MOCHRKS &copy; 2026</span>
            <span className="opacity-50">//</span>
            <span>Build v2.1.0</span>
         </div>
         <a 
           href="https://github.com/mochrks" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-muted-foreground/40 hover:text-primary transition-colors flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest"
         >
           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
           github.com/mochrks
         </a>
      </footer>
    </div>
  );
};

export default Home;