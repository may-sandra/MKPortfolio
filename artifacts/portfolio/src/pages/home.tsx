import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Map, Globe2, Layers, Briefcase, Mail, Cpu, LineChart, Code, BarChart2, TrendingUp, Compass, Download, Linkedin } from "lucide-react";
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

  const domains = ["Energy Access", "WASH", "Geospatial", "Climate Change"];

  const FILTER_TAGS = ["All", "Energy", "WASH", "Geospatial", "Climate Change"] as const;
  type FilterTag = typeof FILTER_TAGS[number];
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

  const otherProjects = [
    {
      title: "SDG 7.1.1 Energy Access Tracking",
      client: "University of Oxford / CCG",
      year: "2025–2026",
      desc: "Coordinated data collection across 43 Sub-Saharan African countries to address critical gaps in tracking progress toward affordable, reliable, and modern energy access. Conducted data analysis and produced visualisations synthesising findings across countries.",
      tags: ["43 SSA Countries", "Data Analysis", "Visualisation"],
      domains: ["Energy"]
    },
    {
      title: "Rwanda Solar Home Systems Assessment",
      client: "The World Bank Group",
      year: "2024–2025",
      desc: "GIS database preparation and sampling strategy design for a Solar Home Systems (SHS) market assessment in Rwanda. Prepared geospatial databases of electrification zones, designed CAPI survey instruments, and conducted spatial analysis of off-grid market penetration and SHS adoption rates across provinces to inform World Bank energy access programming.",
      tags: ["SHS", "Rwanda", "CAPI", "Off-grid"],
      domains: ["Energy", "Geospatial"]
    },
    {
      title: "Lesotho Energy Access Geospatial Analysis",
      client: "EED Advisory",
      year: "2024",
      desc: "Spatial analysis and mapping to support energy access planning in Lesotho. Developed population-weighted electrification rate estimates, produced thematic maps of energy poverty hotspots, and supported the design of least-cost electrification strategies integrating grid extension and off-grid solar options using geospatial datasets and GIS modelling tools.",
      tags: ["Least-Cost Planning", "Off-grid Solar", "Lesotho"],
      domains: ["Energy", "Geospatial"]
    },
    {
      title: "Malawi National Clean Cooking Strategy",
      client: "African Development Bank",
      year: "2025",
      desc: "Aggregated high-resolution population data, applied spatial weighting via road proximity buffers, and conducted hotspot prioritisation for e-cooking by combining population density, infrastructure proximity, and settlement clustering. Produced thematic maps of LPG demand hotspots.",
      tags: ["Hotspot Analysis", "Spatial Weighting", "Malawi"],
      domains: ["Energy"]
    },
    {
      title: "National LPG Master Plan",
      client: "FUNAE, Mozambique",
      year: "2024–2026",
      desc: "Spatial mapping and network analysis of petrol station infrastructure including 5 km service area buffers. Developed composite LPG readiness scores and population proxy indices to evaluate accessibility and compare network performance across operators.",
      tags: ["Network Analysis", "Composite Indices", "Mozambique"],
      domains: ["Energy", "Geospatial"]
    },
    {
      title: "Kenya Agriculture Crop Insurance Atlas",
      client: "Ministry of Agriculture, Kenya",
      year: "2022",
      desc: "Developed spatial datasets and insurance unit databases for 36 counties. Created a national georeferenced atlas using Google Earth Engine and field validation with sub-county agriculture officers. Established land cover extents for all insurance units.",
      tags: ["36 Counties", "Cartography", "GEE"],
      domains: ["Geospatial"]
    },
    {
      title: "Climate-Smart WASH Lending",
      client: "Aqua for All / Sidian Bank",
      year: "2024",
      desc: "Conducted hazard mapping identifying flood, drought, and sea-level rise risks using historical climate data, satellite imagery, and GIS layers. Assessed exposure of WASH infrastructure by overlaying climate hazard data with population density, settlement patterns, and infrastructure locations.",
      tags: ["Hazard Mapping", "Risk Analysis", "Kenya"],
      domains: ["WASH", "Climate Change"]
    },
    {
      title: "World Bank Energy Surveys",
      client: "The World Bank Group",
      year: "2024–2025",
      desc: "GIS database preparation and sampling strategy design for Multi-Tier Framework (MTF) energy access surveys in Namibia, Somalia, Ethiopia, Liberia, and Nigeria covering over 12,000 households. Designed CAPI interfaces and led data cleaning and descriptive analysis.",
      tags: ["MTF Framework", "CAPI", "5 Countries"],
      domains: ["Energy", "WASH"]
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? otherProjects
    : otherProjects.filter(p => p.domains.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md border-b border-white/10" style={{ background: "hsl(227 84% 17% / 0.97)" }}>
        <div className="font-mono text-sm font-bold tracking-widest uppercase" style={{ color: "#00b4d8" }}>Mary Kisaka</div>
        <div className="flex gap-8 font-mono text-xs">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-white/60 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-24 pb-24 overflow-hidden" style={{ background: "hsl(227 84% 17%)" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Nairobi county road network GIS map"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, hsl(227 84% 17%) 20%, hsl(227 84% 17% / 0.5) 60%, hsl(227 84% 17% / 0.15) 100%)" }} />
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, hsl(227 84% 17% / 0.85) 0%, transparent 60%)" }} />
        </div>

        <div className="relative z-30 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12" style={{ background: "#00b4d8" }} />
            <span className="font-mono text-sm tracking-wider uppercase" style={{ color: "#00b4d8" }}>GIS Developer & Geospatial Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.08] text-white"
          >
            Mapping the <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(to right, #00b4d8, #90e0ef, #086bd1)" }}>Energy Transition</span><br />
            Across Africa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl max-w-2xl font-light mb-6 text-white/70"
          >
            I am <strong className="text-white font-semibold">Mary Kisaka</strong> — a GIS developer who writes code as fluently as she interprets satellite imagery. I design spatial platforms and geospatial tools that support governments and international organisations in making evidence-based decisions across Sub-Saharan Africa. My work spans energy systems modelling, WASH, remote sensing analysis and cartography, climate risk assessment, data collection and analysis, and the development of digital solutions for sustainable development. I also prepare technical and financial proposals for projects and write reports.
          </motion.p>

          {/* Domain tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {domains.map(d => (
              <span key={d} className="font-mono text-xs px-3 py-1.5 rounded-full text-white/80" style={{ border: "1px solid rgba(0,180,216,0.4)", background: "rgba(0,180,216,0.12)" }}>
                {d}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-white px-8 py-4 rounded-sm transition-all"
              style={{ background: "#00b4d8" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#00a0c0")}
              onMouseLeave={e => (e.currentTarget.style.background = "#00b4d8")}
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Mary_Kisaka_CV.docx"
              download
              className="group flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-white/70 px-8 py-4 rounded-sm hover:text-white transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-6 mt-8 font-mono text-xs text-white/50"
          >
            <span className="flex items-center gap-2"><Map className="w-3 h-3" style={{ color: "#00b4d8" }} /> Nairobi, Kenya</span>
            <span className="flex items-center gap-2"><Globe2 className="w-3 h-3" style={{ color: "#00b4d8" }} /> 12+ Countries</span>
            <a
              href="https://www.linkedin.com/in/mary-kisaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-3 h-3" style={{ color: "#00b4d8" }} /> LinkedIn
            </a>
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

      {/* About / Overview strip */}
      <section id="about" className="relative py-20 px-6 md:px-24 border-y border-border/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/nairobi-overview-bg.png" alt="Nairobi road network" className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Countries", value: "12+" },
            { label: "Sectors", value: "Energy · WASH · Climate" }
          ].map(s => (
            <motion.div key={s.label} {...fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent z-0" />

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
            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/5 group">
              <div className="h-12 w-12 bg-primary/15 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform group-hover:bg-primary/25">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">Programming & Dev</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><SiPython className="text-primary w-4 h-4 shrink-0" /> Python <span className="text-xs opacity-60">(TensorFlow, CNN, scikit-learn)</span></li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><SiJavascript className="text-secondary w-4 h-4 shrink-0" /> JavaScript</li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><SiReact className="text-primary w-4 h-4 shrink-0" /> React</li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><SiGoogle className="text-secondary w-4 h-4 shrink-0" /> Google Earth Engine API</li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><SiPostgresql className="text-primary w-4 h-4 shrink-0" /> SQL / PostgreSQL</li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><Cpu className="text-secondary w-4 h-4 shrink-0" /> ML: CNN, Random Forest, Regression</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-secondary/60 transition-all hover:shadow-lg hover:shadow-secondary/5 group">
              <div className="h-12 w-12 bg-secondary/15 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform group-hover:bg-secondary/25">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">GIS & Remote Sensing</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors">QGIS & ArcMap</li>
                <li className="hover:text-foreground transition-colors">Sentinel Hub</li>
                <li className="hover:text-foreground transition-colors">SNAP (ESA)</li>
                <li className="hover:text-foreground transition-colors">AWS</li>
                <li className="hover:text-foreground transition-colors">ONSSET Platform</li>
                <li className="hover:text-foreground transition-colors">SAR Data Processing</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-xl hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/5 group">
              <div className="h-12 w-12 bg-primary/15 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform group-hover:bg-primary/25">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-6">Data & Visualization</h3>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><BarChart2 className="w-4 h-4 shrink-0 text-primary" /> Power BI</li>
                <li className="flex items-center gap-3 hover:text-foreground transition-colors"><TrendingUp className="w-4 h-4 shrink-0 text-secondary" /> Tableau</li>
                <li className="hover:text-foreground transition-colors">Web Dashboard Development</li>
                <li className="hover:text-foreground transition-colors">Cartography & Map Design</li>
                <li className="hover:text-foreground transition-colors">Spatial Analysis & Modelling</li>
                <li className="hover:text-foreground transition-colors">Photogrammetry</li>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground font-mono text-sm max-w-xl">
                Select engagements spanning energy access, WASH assessment, geospatial platform development, and climate systems planning across Sub-Saharan Africa.
              </p>
            </div>
            <div className="font-mono text-xs text-secondary/80 uppercase tracking-widest text-right">
              2022 — 2026
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Project 1 — UNICEF Somalia WASH */}
            <motion.div {...fadeInUp} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative overflow-hidden" style={{ minHeight: "260px", maxHeight: "320px" }}>
                  <img
                    src="/unicef-wash.png"
                    alt="UNICEF WASH Vulnerability Monitoring System — Somalia dashboard screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 22%" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 70%, white)" }} />
                </div>
                <div className="lg:col-span-7 p-8 flex flex-col justify-center">
                  <div className="font-mono text-xs mb-1 uppercase tracking-wider" style={{ color: "#00b4d8" }}>UNICEF</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Somalia · 2023–2024</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">WASH Needs Assessment — Somalia</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    Nationwide household WASH security assessment across Somalia. Developed WASH severity indices to identify People in Need (PiN). Built a Power BI online dashboard for spatial and temporal needs indication, informing UNICEF and WASH cluster partners' humanitarian response.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-1 rounded border" style={{ background: "rgba(0,180,216,0.1)", color: "#0891b2", borderColor: "rgba(0,180,216,0.25)" }}>Severity Indices</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Power BI</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Spatial Analysis</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Humanitarian</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 — RIPPLES */}
            <motion.div {...fadeInUp} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-8 flex flex-col justify-center order-2 lg:order-1">
                  <div className="font-mono text-xs text-secondary mb-1 uppercase tracking-wider">UCL / Climate Compatible Growth</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Kenya · Ongoing</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">RIPPLES — Energy Systems Planning Platform</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    Designed and developed a web-based platform to visualise and communicate minimum data requirements for Kenya's Integrated National Energy Plan (INEP) and County Energy Plans (CEPs). Conducted literature reviews, supported stakeholder engagement, and contributed to technical reporting. Role: GIS Developer.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] mb-4">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">GIS Developer</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Web Platform</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Energy Planning</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Kenya</span>
                  </div>
                  <a
                    href="https://energyatlas.africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-secondary hover:text-secondary/80 transition-colors border border-secondary/30 px-4 py-2 rounded hover:border-secondary/60 self-start"
                  >
                    <Globe2 className="w-3.5 h-3.5" /> View Live Platform →
                  </a>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden order-1 lg:order-2" style={{ minHeight: "260px", maxHeight: "320px" }}>
                  <img
                    src="/ripples-platform.png"
                    alt="RIPPLES Integrated Energy Planning Data Platform screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "left 15%" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 70%, white)" }} />
                </div>
              </div>
            </motion.div>

            {/* Project 3 — Mott Foundation DREEM */}
            <motion.div {...fadeInUp} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative overflow-hidden" style={{ minHeight: "260px", maxHeight: "320px" }}>
                  <img
                    src="/dreem-dashboard.png"
                    alt="DREEM Impact Tracking Platform — Mott Foundation dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 8%" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 70%, white)" }} />
                </div>
                <div className="lg:col-span-7 p-8 flex flex-col justify-center">
                  <div className="font-mono text-xs mb-1 uppercase tracking-wider" style={{ color: "#00b4d8" }}>Mott Foundation</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Kenya · Uganda · Tanzania · 2024–2025</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">DREEM Impact Tracking Platform</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    Built and managed a multi-tab Power BI dashboard to track fellows' contributions to local organisations, monthly technical assistance levels, and proposal development outcomes. Covers 10 organisations across Kenya, Uganda, and Tanzania — enabling Mott Foundation to monitor programme impact in real time.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-1 rounded border" style={{ background: "rgba(0,180,216,0.1)", color: "#0891b2", borderColor: "rgba(0,180,216,0.25)" }}>Power BI</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">Impact Tracking</span>
                    <span className="px-2 py-1 bg-background text-muted-foreground rounded border border-border">3 Countries</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 4 — Bayes/CIFF */}
            <motion.div {...fadeInUp} className="group">
              <div className="bg-background/95 border border-border p-10 rounded-xl group-hover:border-secondary/40 transition-colors max-w-4xl">
                <div className="font-mono text-xs text-secondary mb-1 uppercase tracking-wider">Bayes Consulting / CIFF</div>
                <div className="font-mono text-[10px] text-muted-foreground mb-5">Kenya · Uganda · Tanzania · Ethiopia · Malawi · 2025–Ongoing</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 group-hover:text-secondary transition-colors">E-Cooking & Carbon Finance for Sustainable Energy</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Programme targeting demand-side management and budget-neutral energy transition across five countries, leveraging carbon finance under Article 6 of the Paris Agreement. Role as Project Coordinator: overseeing fiscal impact assessments of electric cooking adoption, supporting simulation of electricity transition pathways, coordinating assessments of financing options for energy-efficient appliances, leading client interactions, and managing technical reporting across country teams.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  <span className="px-3 py-1.5 bg-secondary/10 text-secondary rounded border border-secondary/20">Project Coordinator</span>
                  <span className="px-3 py-1.5 bg-card text-muted-foreground rounded border border-border">5 Countries</span>
                  <span className="px-3 py-1.5 bg-card text-muted-foreground rounded border border-border">Energy Transition</span>
                  <span className="px-3 py-1.5 bg-card text-muted-foreground rounded border border-border">Carbon Finance</span>
                  <span className="px-3 py-1.5 bg-card text-muted-foreground rounded border border-border">Article 6 Paris Agreement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GIS Work Grid — Filterable */}
      <section className="py-24 px-6 md:px-24 border-t border-border/50" style={{ background: "hsl(214 36% 96%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">GIS & Research Work</h3>
            <p className="text-muted-foreground font-mono text-sm">Spatial analysis, machine learning, field surveys, and geospatial platform development.</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div {...fadeInUp} className="flex flex-wrap gap-2 mb-10">
            {FILTER_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className="font-mono text-xs px-4 py-2 rounded-full border transition-all"
                style={
                  activeFilter === tag
                    ? { background: "#00b4d8", color: "#fff", borderColor: "#00b4d8" }
                    : { background: "#fff", color: "#64748b", borderColor: "#cbd5e1" }
                }
              >
                {tag}
                {tag !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    {otherProjects.filter(p => p.domains.includes(tag)).length}
                  </span>
                )}
              </button>
            ))}
            <span className="font-mono text-xs text-muted-foreground self-center ml-2">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col group overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex flex-wrap gap-1">
                        {p.domains.map(d => (
                          <span
                            key={d}
                            className="font-mono text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wide"
                            style={{ background: "rgba(0,180,216,0.1)", color: "#0891b2", border: "1px solid rgba(0,180,216,0.25)" }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground shrink-0">{p.year}</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground mb-2 uppercase tracking-wide">{p.client}</div>
                    <h4 className="text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{p.title}</h4>
                    <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px] pt-4 border-t border-border/50">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-1 bg-background rounded text-muted-foreground border border-border/60">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-32 px-6 md:px-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-primary w-6 h-6" /> Experience
            </h2>
            <div className="space-y-8 border-l border-border ml-3 pl-8 relative">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[38px] top-1.5 ring-4 ring-background shadow-lg shadow-primary/30" />
                <h4 className="text-lg font-bold">Senior GIS Developer</h4>
                <div className="text-primary font-mono text-sm mb-2">EED Advisory Ltd.</div>
                <div className="text-muted-foreground text-sm font-mono">April 2025 – Present</div>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[38px] top-1.5 ring-4 ring-background" />
                <h4 className="text-lg font-bold">GIS Developer</h4>
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
                <h4 className="text-lg font-bold">Intern — GIS & Surveying</h4>
                <div className="text-muted-foreground font-mono text-sm mb-2">Kenya Power and Lighting Company (KPLC)</div>
                <div className="text-muted-foreground text-sm font-mono">Aug 2019 – Nov 2019</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Layers className="text-secondary w-6 h-6" /> Education
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg hover:border-secondary/40 transition-colors">
                <h4 className="text-lg font-bold mb-1">BSc. Geospatial Engineering</h4>
                <div className="text-secondary font-mono text-sm mb-1">University of Nairobi</div>
                <div className="text-muted-foreground font-mono text-sm">2021</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg hover:border-secondary/40 transition-colors">
                <h4 className="text-base font-bold mb-1">Certificate — OnSSET / Global Electrification Platform</h4>
                <div className="text-secondary font-mono text-sm mb-1">Climate Compatible Growth (CCG)</div>
                <div className="text-muted-foreground font-mono text-sm">2025</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg hover:border-secondary/40 transition-colors">
                <h4 className="text-base font-bold mb-1">Certificate — Modelling, Policy & Political Economy</h4>
                <div className="text-secondary font-mono text-sm mb-1">Climate Compatible Growth (CCG)</div>
                <div className="text-muted-foreground font-mono text-sm">2025</div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4 text-muted-foreground font-mono uppercase text-sm tracking-wider">Country Experience</h3>
              <div className="flex flex-wrap gap-2">
                {["Kenya", "Rwanda", "Somalia", "Namibia", "Ethiopia", "Liberia", "Lesotho", "DRC", "Uganda", "Tanzania", "Malawi", "Mozambique"].map(c => (
                  <span key={c} className="font-mono text-xs px-3 py-1 bg-card border border-border rounded text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-24" style={{ background: "hsl(227 84% 17%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="font-mono text-sm mb-12 max-w-xl mx-auto text-white/60">
              Open to GIS developer roles, remote sensing projects, and energy access consultancies. Based in Nairobi, Kenya — available for remote and field-based engagements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mkisaka@eedadvisory.com"
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider text-white px-8 py-4 rounded-sm transition-all"
                style={{ background: "#00b4d8" }}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/mary-kisaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider text-white/70 px-8 py-4 rounded-sm hover:text-white transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="/Mary_Kisaka_CV.docx"
                download
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider text-white/70 px-8 py-4 rounded-sm hover:text-white transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-24" style={{ background: "hsl(227 84% 12%)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm font-bold tracking-widest uppercase" style={{ color: "#00b4d8" }}>
            Mary Kisaka
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:mkisaka@eedadvisory.com"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs"
            >
              <Mail className="w-3.5 h-3.5" /> mkisaka@eedadvisory.com
            </a>
            <a
              href="https://www.linkedin.com/in/mary-kisaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
          <div className="font-mono text-xs text-white/30">
            Nairobi, Kenya · 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
