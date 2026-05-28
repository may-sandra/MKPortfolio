import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Map, Compass, Globe2, Layers, Briefcase, Mail, Cpu, LineChart, Code, BarChart2, TrendingUp } from "lucide-react";
import { SiPython, SiJavascript, SiReact, SiPostgresql, SiGoogle } from "react-icons/si";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="font-mono text-sm font-bold tracking-widest uppercase text-white pointer-events-auto">MK.</div>
        <div className="flex gap-6 font-mono text-xs text-white/70 pointer-events-auto">
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-20" />
          <img 
            src="/hero-bg.png" 
            alt="Abstract geospatial data visualization of East Africa" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        
        <div className="relative z-30 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="font-mono text-secondary text-sm tracking-wider uppercase">Senior GIS Analyst & Engineer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Mapping the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Energy Transition</span><br/>
            Across Africa.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light mb-12"
          >
            I am <strong className="text-foreground font-semibold">Mary Kisaka</strong>. I turn complex geospatial data into platforms and dashboards that drive electrification and visualize climate risk. Grounded in code, focused on impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <a href="#projects" className="group flex items-center gap-3 font-mono text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/90 transition-all">
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4 text-muted-foreground font-mono text-xs">
              <span className="flex items-center gap-2"><Map className="w-3 h-3 text-secondary"/> Nairobi, Kenya</span>
              <span className="flex items-center gap-2"><Globe2 className="w-3 h-3 text-secondary"/> 12 Countries</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-6 md:right-24 text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Developer Toolkit</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl">
              Languages, platforms, and models used to process satellite imagery and build interactive spatial analysis tools.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Programming */}
            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">Programming & Dev</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><SiPython className="text-foreground w-4 h-4"/> Python <span className="text-xs opacity-50">(TensorFlow, scikit-learn)</span></li>
                <li className="flex items-center gap-3"><SiJavascript className="text-foreground w-4 h-4"/> JavaScript / <SiReact className="text-foreground w-4 h-4 inline ml-1"/> React</li>
                <li className="flex items-center gap-3"><SiGoogle className="text-foreground w-4 h-4"/> Google Earth Engine (GEE)</li>
                <li className="flex items-center gap-3"><SiPostgresql className="text-foreground w-4 h-4"/> SQL / PostgreSQL</li>
                <li className="flex items-start gap-3"><Cpu className="text-foreground w-4 h-4 shrink-0 mt-0.5"/> ML: CNN, Random Forest</li>
              </ul>
            </motion.div>

            {/* GIS Tools */}
            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-secondary/50 transition-colors group">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">GIS & Remote Sensing</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2">QGIS & ArcMap</li>
                <li className="flex items-center gap-2">Sentinel Hub</li>
                <li className="flex items-center gap-2">SNAP</li>
                <li className="flex items-center gap-2">AWS</li>
                <li className="flex items-center gap-2">ONSSET Platform</li>
              </ul>
            </motion.div>

            {/* Data & Viz */}
            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">Data & Visualization</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><BarChart2 className="text-foreground w-4 h-4"/> Power BI</li>
                <li className="flex items-center gap-3"><TrendingUp className="text-foreground w-4 h-4"/> Tableau</li>
                <li className="flex items-center gap-2">Web dashboard development</li>
                <li className="flex items-center gap-2">Cartography</li>
                <li className="flex items-center gap-2">Spatial analysis</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Platforms</h2>
              <p className="text-muted-foreground font-mono text-sm max-w-xl">
                Select projects driving energy access and systemic planning across Sub-Saharan Africa.
              </p>
            </div>
            <div className="font-mono text-xs text-secondary/70 uppercase tracking-widest text-right">
              2022 — 2025
            </div>
          </motion.div>

          <div className="space-y-24">
            {/* Project 1 */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden flex items-center justify-center p-8">
                {/* Abstract viz placeholder */}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="relative w-full h-full border border-primary/20 rounded-lg flex flex-col">
                  <div className="h-8 border-b border-primary/20 flex items-center px-4 gap-2">
                     <div className="w-2 h-2 rounded-full bg-primary/50" />
                     <div className="w-2 h-2 rounded-full bg-secondary/50" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="h-4 w-1/3 bg-primary/20 rounded" />
                    <div className="h-4 w-full bg-border rounded" />
                    <div className="h-4 w-5/6 bg-border rounded" />
                    <div className="flex-1 mt-4 grid grid-cols-3 gap-4">
                      <div className="bg-primary/10 rounded col-span-2" />
                      <div className="bg-secondary/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:-ml-12 z-10">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl">
                  <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-wider">Bayes Consulting / CIFF</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">E-Cooking & Carbon Finance Dashboard</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Developed a web-based dashboard to dynamically visualize electricity transition pathway model outcomes, supporting demand-side management and budget-neutral energy transition strategies leveraging carbon finance (Article 6 Paris Agreement).
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                    <span className="px-2 py-1 bg-card rounded">Kenya</span>
                    <span className="px-2 py-1 bg-card rounded">Uganda</span>
                    <span className="px-2 py-1 bg-card rounded">Tanzania</span>
                    <span className="px-2 py-1 bg-card rounded">Ethiopia</span>
                    <span className="px-2 py-1 bg-card rounded">Malawi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 z-10 order-2 lg:order-1 lg:-mr-12">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl">
                  <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-wider">UCL / Climate Compatible Growth</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">RIPPLES — Energy Systems Planning Platform</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Designed and developed a web-based platform to visualize and communicate minimum data requirements for Kenya's Integrated National Energy Plan (INEP) and County Energy Plans (CEPs). Supported stakeholder engagement with technical teams.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                    <span className="px-2 py-1 bg-card rounded">GIS Developer</span>
                    <span className="px-2 py-1 bg-card rounded">Web GIS</span>
                    <span className="px-2 py-1 bg-card rounded">Kenya</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden flex items-center justify-center p-8 order-1 lg:order-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full border border-secondary/20 rounded-lg flex gap-4 p-4">
                  <div className="w-1/4 h-full bg-border/50 rounded flex flex-col gap-2 p-2">
                     <div className="h-2 w-full bg-secondary/30 rounded" />
                     <div className="h-2 w-full bg-secondary/30 rounded" />
                     <div className="h-2 w-2/3 bg-secondary/30 rounded" />
                  </div>
                  <div className="flex-1 h-full bg-secondary/5 rounded border border-secondary/20" />
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden flex items-center justify-center p-8">
                 <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`rounded bg-primary/${Math.random() > 0.5 ? '20' : '5'}`} />
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-5 lg:-ml-12 z-10">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl">
                  <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-wider">GEAPP</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Alliance for Electrification in DRC — Digital Tracking</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Coordinated development and ongoing management of a digital platform to track and showcase energy projects across the DRC, aligned with the M300 Compact and Access Coalition Mechanism partners (World Bank, AfDB, Rockefeller, Power Africa).
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                    <span className="px-2 py-1 bg-card rounded">Technical Analyst</span>
                    <span className="px-2 py-1 bg-card rounded">DRC</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project 4 */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 z-10 order-2 lg:order-1 lg:-mr-12">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl">
                  <div className="font-mono text-xs text-secondary mb-4 uppercase tracking-wider">University of Oxford / CCG</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">SDG 7.1.1 Progress Tracking</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Led data collection coordination across 43 countries, performed data analysis and visualization to synthesize findings on energy access gaps and misrepresentation of electrification status across Sub-Saharan Africa.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                    <span className="px-2 py-1 bg-card rounded">Data Analysis</span>
                    <span className="px-2 py-1 bg-card rounded">43 SSA Countries</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden flex items-center justify-center p-8 order-1 lg:order-2">
                 <div className="w-full h-full flex flex-col justify-end gap-2 px-8 pt-8 opacity-40 group-hover:opacity-80 transition-opacity">
                    <div className="flex items-end justify-between h-full gap-2 border-b border-secondary/30 pb-2">
                      {[40, 70, 30, 90, 50, 80, 20].map((h, i) => (
                        <div key={i} className="w-full bg-secondary/40 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-24 px-6 md:px-24 bg-card/50 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.h3 {...fadeInUp} className="text-2xl font-bold mb-12">Other Work & Research</motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Mott Foundation DREEM Dashboard",
                client: "Mott Foundation",
                desc: "Dynamic dashboard tracking fellows' contributions to local organizations and monthly technical assistance levels.",
                tags: ["Kenya", "Uganda", "Tanzania"]
              },
              {
                title: "UNICEF Somalia WASH Dashboard",
                client: "UNICEF",
                desc: "Power BI online dashboard assessing People in Need (PiN) with WASH severity indices for spatial and temporal needs.",
                tags: ["Power BI", "Somalia"]
              },
              {
                title: "Electricity Demand ML Model",
                client: "Internal EED",
                desc: "Random Forest regression in GEE, integrated with global electrification, population, and LULC data.",
                tags: ["Machine Learning", "GEE", "Kenya"]
              },
              {
                title: "AIRTEA Mobile GIS Platform",
                client: "FARA",
                desc: "CNN-based image recognition for LULC monitoring, soil moisture, and urban heat assessment using GEE.",
                tags: ["CNN", "Sentinel-1", "Kenya"]
              },
              {
                title: "Agriculture Crop Insurance Atlas",
                client: "Ministry of Agriculture, Kenya",
                desc: "Spatial datasets and databases for 36 counties; created a georeferenced national atlas for stakeholders.",
                tags: ["Cartography", "Spatial Data"]
              },
              {
                title: "National LPG Master Plan",
                client: "FUNAE",
                desc: "GIS analysis of petrol station networks, service area buffers, readiness indices, and accessibility scoring.",
                tags: ["Mozambique", "Spatial Analysis"]
              },
              {
                title: "Climate-Smart WASH Lending",
                client: "Aqua for All",
                desc: "Hazard mapping (flood, drought, sea-level rise), vulnerability assessment for WASH infrastructure.",
                tags: ["Kenya", "Hazard Mapping"]
              }
            ].map((p, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background border border-border p-6 rounded-lg hover:border-primary/50 transition-colors flex flex-col">
                <div className="font-mono text-[10px] text-secondary mb-2 uppercase">{p.client}</div>
                <h4 className="text-lg font-bold mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground">
                  {p.tags.map(t => <span key={t} className="px-2 py-1 bg-card rounded">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-32 px-6 md:px-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Briefcase className="text-primary"/> Experience</h2>
            <div className="space-y-8 border-l border-border ml-3 pl-8 relative">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[38px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold">Senior GIS Analyst</h4>
                <div className="text-primary font-mono text-sm mb-2">EED Advisory Ltd.</div>
                <div className="text-muted-foreground text-sm font-mono">April 2025 – Present</div>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold">GIS Analyst</h4>
                <div className="text-muted-foreground font-mono text-sm mb-2">EED Advisory Ltd.</div>
                <div className="text-muted-foreground text-sm font-mono">March 2023 – March 2025</div>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold">GIS Assistant / Geospatial Analyst</h4>
                <div className="text-muted-foreground font-mono text-sm mb-2">Geospatial Research International</div>
                <div className="text-muted-foreground text-sm font-mono">Aug 2021 – Feb 2023</div>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold">Intern</h4>
                <div className="text-muted-foreground font-mono text-sm mb-2">Kenya Power and Lighting Company</div>
                <div className="text-muted-foreground text-sm font-mono">Aug 2019 – Nov 2019</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Layers className="text-secondary"/> Education</h2>
            <div className="space-y-8">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">BSc. Geospatial Engineering</h4>
                <div className="text-muted-foreground font-mono text-sm mb-4">University of Nairobi (2021)</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Certificates in OnSSET / Global Electrification Platform</h4>
                <div className="text-muted-foreground font-mono text-sm mb-4">Modelling, Policy & Political Economy (Climate Compatible Growth, 2025)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 px-6 md:px-24 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm font-bold tracking-widest uppercase">
            Mary Kisaka
          </div>
          <a href="mailto:mkisaka@eedadvisory.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
            <Mail className="w-4 h-4" /> mkisaka@eedadvisory.com
          </a>
        </div>
      </footer>
    </div>
  );
}
