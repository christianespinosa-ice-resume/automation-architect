import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Printer, Briefcase, GraduationCap, Wrench, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const skills = [
  "AVEVA Wonderware System Platform",
  "SCADA Development & System Migration",
  "PLC Integration & Tag Mapping (Siemens / Rockwell)",
  "Industrial Protocols (OPC DA/UA, Ethernet/IP, Modbus TCP)",
  "Control System Documentation & Architecture Review",
  "P&ID Interpretation & Process Flow Validation",
  "Alarm & Historian Configuration",
  "Field Instrumentation & Commissioning Support",
  "Network Architecture (Field to SCADA Layer)",
  "Root Cause Analysis & System Troubleshooting",
];

const tools = [
  "AVEVA System Platform",
  "Wonderware InTouch",
  "iFIX",
  "MS Visio",
  "MS Excel",
  "Industrial Networking Fundamentals",
];

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Print Button & Dark Mode Toggle */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="outline"
          size="icon"
          className="shadow-md bg-card"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button onClick={() => window.print()} variant="outline" size="sm" className="gap-2 shadow-md bg-card">
          <Printer size={16} />
          Download / Print
        </Button>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-10 print:py-4 print:px-4">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            CHRISTIAN T. ESPINOSA
          </h1>
          <p className="text-lg font-medium text-accent-foreground mt-1" style={{ color: 'hsl(200, 70%, 45%)' }}>
            Plant Automation &amp; SCADA Engineer
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Pasig City, Philippines</span>
            <a href="mailto:christian.t.espinosa@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={14} /> christian.t.espinosa@gmail.com
            </a>
            <a href="tel:09289258127" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={14} /> 09289258127
            </a>
          </div>
        </header>

        <Separator className="mb-6" />

        {/* Professional Profile */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Professional Profile</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Automation &amp; Instrumentation Engineer with 9 years of combined field and industrial automation experience spanning beverage manufacturing and semiconductor facilities. Proven expertise in SCADA development, PLC integration, system migration, and plant-level troubleshooting. Strong background in process control interpretation, P&amp;ID analysis, I/O mapping, and control system documentation.
          </p>
          <p className="text-sm leading-relaxed text-foreground mt-2">
            Led large-scale migration from iFIX to AVEVA System Platform supporting mission-critical semiconductor manufacturing operations.
          </p>
        </section>

        <Separator className="mb-6" />

        {/* Core Expertise */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Core Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-medium px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="mb-6" />

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
            <Briefcase size={14} /> Professional Experience
          </h2>

          {/* TI */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-primary">Instrumentation &amp; Control Specialist (INCS)</h3>
                <p className="text-sm text-foreground">System Information Engineer / SCADA Developer</p>
                <p className="text-sm text-muted-foreground">Texas Instruments Manufacturing Facility — Baguio City</p>
              </div>
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">2018 – 2023</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-foreground list-disc list-outside ml-5">
              <li>Led P2020 SCADA Migration Project converting legacy iFIX systems to AVEVA System Platform.</li>
              <li>Designed and configured SCADA objects, templates, alarms, historian integration, and system architecture components.</li>
              <li>Coordinated PLC I/O mapping and tag standardization during migration activities.</li>
              <li>Assisted in development and review of control system documentation including system architecture diagrams and functional descriptions.</li>
              <li>Validated process flow and control philosophy alignment with manufacturing operations.</li>
              <li>Integrated AVEVA System Platform with Siemens and Rockwell PLC systems via OPC, Ethernet/IP, and Modbus TCP.</li>
              <li>Provided global troubleshooting support across semiconductor manufacturing facilities.</li>
              <li>Served as team lead during deployment and commissioning phases.</li>
            </ul>
            <div className="mt-3 bg-muted rounded-md p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Key Impact</p>
              <ul className="space-y-0.5 text-sm text-foreground list-disc list-outside ml-5">
                <li>Delivered production-critical migration with minimal downtime.</li>
                <li>Improved system scalability through object template standardization.</li>
                <li>Reduced issue resolution time through structured diagnostics and root cause analysis.</li>
              </ul>
            </div>
          </div>

          {/* ICI */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-primary">ICI Systems Corporation</h3>
                <p className="text-sm text-foreground">Instrument Technician</p>
                <p className="text-sm text-muted-foreground">Coca-Cola | Pepsi | San Miguel Brewery — Pampanga</p>
              </div>
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">2013 – 2018</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-foreground list-disc list-outside ml-5">
              <li>Installed, calibrated, and maintained field instruments for beverage production plants.</li>
              <li>Supported Clean-in-Place (CIP) automation systems.</li>
              <li>Performed loop checking and I/O verification during commissioning.</li>
              <li>Interpreted P&amp;ID, loop, and wiring diagrams to support control implementation.</li>
              <li>Assisted in startup, troubleshooting, and plant automation support activities.</li>
            </ul>
          </div>
        </section>

        <Separator className="mb-6" />

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
            <GraduationCap size={14} /> Education
          </h2>
          <p className="text-sm font-bold text-primary">Bachelor of Science in Instrumentation and Control Engineering</p>
          <p className="text-sm text-muted-foreground">Rizal Technological University, Batch 2013</p>
        </section>

        <Separator className="mb-6" />

        {/* Technical Tools */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
            <Wrench size={14} /> Technical Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs font-medium px-3 py-1">
                {tool}
              </Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
