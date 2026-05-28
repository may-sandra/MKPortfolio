import { motion } from "framer-motion";
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

  const otherProjects = [
    {
      title: "SDG 7.1.1 Energy Access Tracking",
      client: "University of Oxford / CCG",
      year: "2025–2026",
      desc: "Coordinated data collection across 43 Sub-Saharan African countries to address critical gaps in tracking progress toward affordable, reliable, and modern energy access. Conducted data analysis and produced visualisations synthesising findings across countries.",
      tags: ["43 SSA Countries", "Data Analysis", "Visualisation"]
    },
    {
      title: "AIRTEA Mobile GIS Crop Diagnostics",
      client: "FARA / Kenyatta University",
      year: "2022–2023",
      desc: "Developed CNN-based image recognition algorithms for land use/land cover monitoring, volumetric soil moisture using SAR (Sentinel-1), and urban heat assessment using Google Earth Engine Python and JavaScript APIs. Built a mobile GIS application for crop diagnostics.",
      tags: ["CNN", "Sentinel-1 SAR", "GEE", "Machine Learning"]
    },
    {
      title: "Electricity Demand Estimation — ML",
      client: "EED Advisory (Internal)",
      year: "2023",
      desc: "Spatial methodology for electricity demand estimation using Random Forest regression in Google Earth Engine, integrating global electrification data, population density, and LULC data. Benchmarked against ONSSET tool results.",
      tags: ["Random Forest", "GEE", "Kenya"]
    },
    {
      title: "Malawi National Clean Cooking Strategy",
      client: "African Development Bank",
      year: "2025",
      desc: "Aggregated high-resolution population data, applied spatial weighting via road proximity buffers, and conducted hotspot prioritisation for e-cooking by combining population density, infrastructure proximity, and settlement clustering. Produced thematic maps of LPG demand hotspots.",
      tags: ["Hotspot Analysis", "Spatial Weighting", "Malawi"]
    },
    {
      title: "National LPG Master Plan",
      client: "FUNAE, Mozambique",
      year: "2024–2026",
      desc: "Spatial mapping and network analysis of petrol station infrastructure including 5 km service area buffers. Developed composite LPG readiness scores and population proxy indices to evaluate accessibility and compare network performance across operators.",
      tags: ["Network Analysis", "Composite Indices", "Mozambique"]
    },
    {
      title: "Kenya Agriculture Crop Insurance Atlas",
      client: "Ministry of Agriculture, Kenya",
      year: "2022",
      desc: "Developed spatial datasets and insurance unit databases for 36 counties. Created a national georeferenced atlas using Google Earth Engine and field validation with sub-county agriculture officers. Established land cover extents for all insurance units.",
      tags: ["36 Counties", "Cartography", "GEE"]
    },
    {
      title: "Climate-Smart WASH Lending",
      client: "Aqua for All / Sidian Bank",
      year: "2024",
      desc: "Conducted hazard mapping identifying flood, drought, and sea-level rise risks using historical climate data, satellite imagery, and GIS layers. Assessed exposure of WASH infrastructure by overlaying climate hazard data with population density, settlement patterns, and infrastructure locations.",
      tags: ["Hazard Mapping", "Risk Analysis", "Kenya"]
    },
    {
      title: "World Bank Energy Surveys",
      client: "The World Bank Group",
      year: "2024–2025",
      desc: "GIS database preparation and sampling strategy design for Multi-Tier Framework (MTF) energy access surveys in Namibia, Somalia, Ethiopia, Liberia, and Nigeria covering over 12,000 households. Designed CAPI interfaces and led data cleaning and descriptive analysis.",
      tags: ["MTF Framework", "CAPI", "5 Countries"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-background/70 border-b border-border/30">
        <div className="font-mono text-sm font-bold tracking-widest uppercase text-primary">Mary Kisaka</div>
        <div className="flex gap-8 font-mono text-xs">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/75 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20" />
          <img
            src="/hero-bg.png"
            alt="Abstract geospatial satellite visualization of East Africa"
            className="w-full h-full object-cover object-center opacity-55"
          />
        </div>

        <div className="relative z-30 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-primary text-sm tracking-wider uppercase">GIS Developer & Geospatial Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.08]"
          >
            Mapping the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">Energy Transition</span><br />
            Across Africa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-6"
          >
            I am <strong className="text-foreground font-semibold">Mary Kisaka</strong> — a GIS developer who writes code as fluently as she reads satellite imagery. I build the platforms and spatial tools that governments and international organisations use to track electrification, model climate risk, and drive evidence-based decisions across Sub-Saharan Africa.
          </motion.p>

          {/* Domain tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {domains.map(d => (
              <span key={d} className="font-mono text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary bg-primary/10">
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
              className="group flex items-center gap-3 font-mono text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/85 transition-all"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Mary_Kisaka_CV.docx"
              download
              className="group flex items-center gap-3 font-mono text-sm uppercase tracking-wider border border-border text-muted-foreground px-8 py-4 rounded-sm hover:border-primary/60 hover:text-primary transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-6 mt-8 font-mono text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-2"><Map className="w-3 h-3 text-secondary" /> Nairobi, Kenya</span>
            <span className="flex items-center gap-2"><Globe2 className="w-3 h-3 text-secondary" /> 12+ Countries</span>
            <a
              href="https://www.linkedin.com/in/mary-kisaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="w-3 h-3 text-secondary" /> LinkedIn
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

          <div className="space-y-24">
            {/* Project 1 — UNICEF Somalia WASH */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden group-hover:border-primary/40 transition-colors">
                <img
                  src="/unicef-wash.png"
                  alt="UNICEF WASH Vulnerability Monitoring System — Somalia dashboard screenshot"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-5 lg:-ml-12 z-10">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl group-hover:border-primary/30 transition-colors">
                  <div className="font-mono text-xs text-primary mb-1 uppercase tracking-wider">UNICEF</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Somalia · 2023–2024</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">WASH Needs Assessment — Somalia</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Nationwide household WASH security assessment across Somalia. Developed WASH severity indices tailored to the Somali context to identify People in Need (PiN). Created spatial visualization maps and built a Power BI online dashboard for spatial and temporal needs indication, informing UNICEF and WASH cluster partners' humanitarian response.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">Severity Indices</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Power BI</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Spatial Analysis</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Humanitarian</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 — RIPPLES */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 z-10 order-2 lg:order-1 lg:-mr-12">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl group-hover:border-secondary/30 transition-colors">
                  <div className="font-mono text-xs text-secondary mb-1 uppercase tracking-wider">UCL / Climate Compatible Growth</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Kenya · Ongoing</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">RIPPLES — Energy Systems Planning Platform</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Designed and developed a web-based platform to visualise and communicate minimum data requirements for Kenya's Integrated National Energy Plan (INEP) and County Energy Plans (CEPs). Conducted literature reviews informing energy systems planning approaches, supported stakeholder engagement, and contributed to technical reporting and deliverables. Role: GIS Developer.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] mb-5">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">GIS Developer</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Web Platform</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Energy Planning</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Kenya</span>
                  </div>
                  <a
                    href="https://energyatlas.africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-secondary hover:text-secondary/80 transition-colors border border-secondary/30 px-4 py-2 rounded hover:border-secondary/60"
                  >
                    <Globe2 className="w-3.5 h-3.5" /> View Live Platform →
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 bg-card rounded-xl aspect-[4/3] border border-border relative overflow-hidden order-1 lg:order-2 group-hover:border-secondary/40 transition-colors">
                <img
                  src="/ripples-platform.png"
                  alt="RIPPLES Integrated Energy Planning Data Platform screenshot"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Project 3 — Mott Foundation DREEM */}
            <motion.div {...fadeInUp} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-card rounded-xl overflow-hidden border border-border group-hover:border-primary/40 transition-colors">
                <img
                  src="/dreem-dashboard.png"
                  alt="DREEM Impact Tracking Platform — Mott Foundation dashboard"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: "4/3" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="lg:col-span-5 lg:-ml-12 z-10">
                <div className="bg-background/95 backdrop-blur-md border border-border p-8 rounded-xl shadow-2xl group-hover:border-primary/30 transition-colors">
                  <div className="font-mono text-xs text-primary mb-1 uppercase tracking-wider">Mott Foundation</div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-4">Kenya · Uganda · Tanzania · 2024–2025</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">DREEM Impact Tracking Platform</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Built and managed a multi-tab Power BI dashboard to track fellows' contributions to local organisations, monthly technical assistance levels, proposal development outcomes, and sector-level activity breakdowns. Covers 10 organisations across Kenya, Uganda, and Tanzania. Dashboard includes overview, project baseline, TA support, and SDGs tabs, enabling Mott Foundation to monitor programme impact in real time.
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">Power BI</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">Impact Tracking</span>
                    <span className="px-2 py-1 bg-card text-muted-foreground rounded">3 Countries</span>
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

      {/* GIS Work Grid */}
      <section className="py-24 px-6 md:px-24 bg-card/40 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">GIS & Research Work</h3>
            <p className="text-muted-foreground font-mono text-sm">Spatial analysis, machine learning, field surveys, and geospatial platform development.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-background border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col group overflow-hidden"
              >
                {"image" in p && p.image && (
                  <div className="relative h-40 overflow-hidden border-b border-border/60">
                    <img
                      src={p.image as string}
                      alt={p.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="font-mono text-[10px] text-primary uppercase tracking-wide">{p.client}</div>
                    <div className="font-mono text-[10px] text-muted-foreground shrink-0">{p.year}</div>
                  </div>
                  <h4 className="text-base font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {p.tags.map(t => (
                      <span key={t} className="px-2 py-1 bg-card rounded text-muted-foreground border border-border/60">{t}</span>
                    ))}
                  </div>
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
      <section id="contact" className="py-24 px-6 md:px-24 border-t border-border/50 bg-card/40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground font-mono text-sm mb-12 max-w-xl mx-auto">
              Open to GIS developer roles, remote sensing projects, and energy access consultancies. Based in Nairobi, Kenya — available for remote and field-based engagements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mkisaka@eedadvisory.com"
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:bg-primary/85 transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/mary-kisaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider border border-border text-muted-foreground px-8 py-4 rounded-sm hover:border-primary/60 hover:text-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="/Mary_Kisaka_CV.docx"
                download
                className="group flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wider border border-border text-muted-foreground px-8 py-4 rounded-sm hover:border-secondary/60 hover:text-secondary transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-24 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm font-bold tracking-widest uppercase text-primary">
            Mary Kisaka
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:mkisaka@eedadvisory.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs"
            >
              <Mail className="w-3.5 h-3.5" /> mkisaka@eedadvisory.com
            </a>
            <a
              href="https://www.linkedin.com/in/mary-kisaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Nairobi, Kenya · 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
