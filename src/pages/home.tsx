import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Sparkles, Sword, Blocks, Music, ShieldAlert, Headphones, Mouse, Keyboard, Monitor } from 'lucide-react';

const games = [
  {
    id: 'genshin',
    title: 'Genshin Impact',
    genre: 'Open-World Action RPG',
    icon: <Sword className="w-6 h-6" />,
    description: 'Exploring Teyvat one elemental reaction at a time. The landscapes, the lore, the absolute grind for perfect artifacts.',
    color: 'from-teal-500/20 to-emerald-500/20',
    borderColor: 'border-teal-500/50',
    textColor: 'text-teal-400',
    bgImage: '/images/genshin-bg.png',
    stats: ['AR 60', '36★ Abyss', '100% Exploration']
  },
  {
    id: 'arknights',
    title: 'Arknights: Endfield',
    genre: 'Tactical 3D RPG',
    icon: <ShieldAlert className="w-6 h-6" />,
    description: 'Strategic deployment meets base building. Industrial aesthetics and tactical depth.',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/50',
    textColor: 'text-yellow-400',
    bgImage: '/images/arknights-bg.png',
    stats: ['Base Maxed', 'All Operators', 'Risk 18']
  },
  {
    id: 'sekai',
    title: 'Colorful Stage',
    genre: 'Rhythm Game',
    icon: <Music className="w-6 h-6" />,
    description: 'Tapping to the beat. Vocaloid culture, intense rhythm charts, and colorful stories.',
    color: 'from-pink-500/20 to-cyan-500/20',
    borderColor: 'border-pink-500/50',
    textColor: 'text-pink-400',
    bgImage: '/images/project-sekai-bg.png',
    stats: ['Master FC', 'Tier 100', 'Max Level']
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    genre: 'Sandbox Survival',
    icon: <Blocks className="w-6 h-6" />,
    description: 'The ultimate canvas. From dirt huts to massive redstone contraptions.',
    color: 'from-green-500/20 to-blue-500/20',
    borderColor: 'border-green-500/50',
    textColor: 'text-green-400',
    bgImage: '/images/minecraft-bg.png',
    stats: ['10k+ Hours', 'Mega Base', 'Elytra Pro']
  },
  {
    id: 'roblox',
    title: 'Roblox',
    genre: 'User-Created Platform',
    icon: <Gamepad2 className="w-6 h-6" />,
    description: 'Endless experiences. Obbys, tycoons, and chaotic fun with friends.',
    color: 'from-red-500/20 to-blue-500/20',
    borderColor: 'border-red-500/50',
    textColor: 'text-red-400',
    bgImage: '/images/roblox-bg.png',
    stats: ['200+ Games', 'Top Trader', 'Developer']
  }
];

const gear = [
  { name: 'Custom Mechanical', type: 'Keyboard', icon: <Keyboard className="w-5 h-5 text-primary" /> },
  { name: 'Ultralight Wireless', type: 'Mouse', icon: <Mouse className="w-5 h-5 text-secondary" /> },
  { name: 'Studio Reference', type: 'Audio', icon: <Headphones className="w-5 h-5 text-accent" /> },
  { name: '1440p 240Hz OLED', type: 'Display', icon: <Monitor className="w-5 h-5 text-chart-4" /> },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Floating Now Playing Widget */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50 glass-panel rounded-full px-4 py-2 flex items-center gap-3 border border-primary/20 shadow-neon"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm font-mono text-muted-foreground hidden sm:inline">Now Playing:</span>
        <span className="text-sm font-bold text-primary-foreground">Genshin Impact</span>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <HeroBackground scrollYProgress={scrollYProgress} />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center space-y-8 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 text-primary bg-primary/10 backdrop-blur-md mb-6 uppercase tracking-widest font-mono">
              Welcome to the den
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary text-glow">Gaming</span>
            <br />
            World
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            A curated collection of worlds I inhabit, blocks I've placed, and beats I've tapped. Enter at your own risk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-12"
          >
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Stats Strip */}
      <section className="relative z-20 py-12 border-y border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            {[
              { label: 'Hours Played', value: '15,000+' },
              { label: 'Achievements', value: '4,281' },
              { label: 'Controllers Broken', value: '3' },
              { label: 'Energy Drinks', value: 'Too Many' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col space-y-2"
              >
                <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Sections */}
      <div className="relative z-10">
        {games.map((game, index) => (
          <GameSection key={game.id} game={game} index={index} />
        ))}
      </div>

      {/* Gear / Setup Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/images/gear-bg.png" alt="Gaming Gear" className="w-full h-full object-cover opacity-20 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              The Arsenal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Every great adventurer needs their tools. Here's what powers the grind.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gear.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <Card className="glass-panel border-white/10 hover:border-primary/50 transition-colors duration-300 group">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{item.type}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 relative overflow-hidden bg-black/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-8 opacity-80 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </motion.div>
          <h2 className="text-4xl font-black mb-4 tracking-tighter">GG WP</h2>
          <p className="text-muted-foreground font-mono text-sm max-w-md mx-auto leading-relaxed mb-8">
            Created with passion. Never stop playing. Keep grinding, keep building, keep rolling.
          </p>
          <Button variant="outline" className="rounded-full border-primary/30 hover:bg-primary/20 text-primary transition-all">
            Back to Top
          </Button>
        </div>
      </footer>
    </div>
  );
}

function HeroBackground({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute inset-0 z-0"
    >
      <img 
        src="/images/hero-bg.png" 
        alt="Gaming Den" 
        className="w-full h-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-transparent" />
    </motion.div>
  );
}

function GameSection({ game, index }: { game: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-32 relative overflow-hidden group">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-[0.15] group-hover:opacity-30">
        <motion.img 
          src={game.bgImage} 
          alt={game.title} 
          className="w-full h-full object-cover scale-110" 
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className={`absolute inset-0 bg-gradient-to-b ${game.color} mix-blend-overlay`} />
      </div>

      {/* Decorative Gradient Blob */}
      <div className={`absolute top-1/2 ${isEven ? '-left-1/4' : '-right-1/4'} w-1/2 h-full -translate-y-1/2 rounded-full blur-[120px] bg-gradient-to-br ${game.color} opacity-20 pointer-events-none`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
          
          {/* Image Container */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <div className={`aspect-video rounded-3xl overflow-hidden border-2 ${game.borderColor} shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group/image`}>
              <img 
                src={game.bgImage} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110 group-hover/image:rotate-1" 
              />
              <div className={`absolute inset-0 border-4 rounded-3xl ${game.borderColor} opacity-30 mix-blend-overlay pointer-events-none`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-4 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-lg ${game.textColor}`}>
                {game.icon}
              </div>
              <Badge variant="outline" className={`px-4 py-2 text-sm font-mono tracking-wider ${game.textColor} ${game.borderColor} bg-background/50 backdrop-blur-sm`}>
                {game.genre}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">{game.title}</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {game.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {game.stats.map((stat: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
                >
                  <Card className="glass-panel border-white/5 hover:border-white/20 transition-colors">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full gap-2">
                      <span className={`font-mono text-sm md:text-base font-bold ${game.textColor}`}>{stat}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
