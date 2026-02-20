import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Printer, Briefcase, GraduationCap, Wrench, Sun, Moon, Send, Award } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import profilePhoto from "@/assets/profile-photo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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

const certifications = [
  { name: "System Platform 2017 Update 3: Change Control and Propagation", date: "02 Jul 2021", ceu: "0.09" },
  { name: "AVEVA™ InTouch HMI Web Client 2020 Preview", date: "03 Jul 2021", ceu: "0.1" },
  { name: "InTouch HMI 2017: Application Publishing", date: "03 Jul 2021", ceu: "0.01" },
  { name: "InTouch HMI 2017: Security Configuration Using OS Security", date: "03 Jul 2021", ceu: "0.01" },
  { name: "System Platform 2017 Update 3: Historizing Attributes and Historical Visualization", date: "27 Jun 2021", ceu: "0.08" },
  { name: "Alarm Logging 2014 R2 SP1 Rev B", date: "27 Jun 2021", ceu: "0.075" },
  { name: "System Platform 2017 Update 3: Object I/O Access", date: "20 Jun 2021", ceu: "0.11" },
  { name: "InTouch HMI 2017: Network Application Distribution", date: "20 Jun 2021", ceu: "0.05" },
  { name: "InTouch HMI 2017: Application Backup and Restore", date: "01 Jun 2021", ceu: "0.05" },
  { name: "System Platform 2017 Update 3: Galaxy Security", date: "30 May 2021", ceu: "0.25" },
];

const isaCertifications = [
  { name: "(IC34M01) Assessment Overview", date: "01 Oct 2022", ceu: "0.5" },
  { name: "(IC37M01) Review of Assess Phase", date: "23 Oct 2022", ceu: "0.5" },
];

const wonderwareCertifications = [
  { name: "Wonderware Application Developer for CSI Application Server 2017 Update 3", date: "01 Apr 2020" },
  { name: "Wonderware Application Developer for CSI Historian Server 2017 Update 3", date: "09 Apr 2020" },
  { name: "Wonderware Application Developer for CSI InTouch for System Platform 2017 Update 3", date: "18 Apr 2020" },
  { name: "Wonderware Application Developer for CSI Historian Client 2017 Update 3", date: "24 Apr 2020" },
  { name: "Wonderware Application Developer for InTouch 11.1 - 2014 R2", date: "15 Jan 2018" },
  { name: "Wonderware Application Developer for Application Server 4.1 - 2014 R2", date: "16 Jan 2018" },
  { name: "Wonderware Application Developer for InTouch for System Platform 11.1 - 2014 R2", date: "18 Jan 2018" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const { error } = await supabase.functions.invoke("send-contact-email", {
      body: {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      },
    });
    if (error) {
      toast.error("Failed to send message. Please try again.");
    } else {
      toast.success("Message sent! Christian will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
    setSending(false);
  };

  return (
    <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <Send size={14} /> Get In Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              maxLength={255}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm">Message</Label>
          <Textarea
            id="message"
            placeholder="How can Christian help you?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            maxLength={1000}
            rows={4}
          />
        </div>
        <Button type="submit" disabled={sending} className="gap-2">
          <Send size={16} />
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.section>
  );
};

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
        <motion.header className="mb-8 flex flex-col sm:flex-row items-start gap-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <img
            src={profilePhoto}
            alt="Christian T. Espinosa"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-primary/20 shadow-md shrink-0"
          />
          <div>
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
          </div>
        </motion.header>

        <Separator className="mb-6" />

        {/* Professional Profile */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Professional Profile</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Automation &amp; Instrumentation Engineer with 9 years of combined field and industrial automation experience spanning beverage manufacturing and semiconductor facilities. Proven expertise in SCADA development, PLC integration, system migration, and plant-level troubleshooting. Strong background in process control interpretation, P&amp;ID analysis, I/O mapping, and control system documentation.
          </p>
          <p className="text-sm leading-relaxed text-foreground mt-2">
            Led large-scale migration from iFIX to AVEVA System Platform supporting mission-critical semiconductor manufacturing operations.
          </p>
        </motion.section>

        <Separator className="mb-6" />

        {/* Core Expertise */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Core Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-medium px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.section>

        <Separator className="mb-6" />

        {/* Professional Experience */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
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
        </motion.section>

        <Separator className="mb-6" />

        {/* Education */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
            <GraduationCap size={14} /> Education
          </h2>
          <p className="text-sm font-bold text-primary">Bachelor of Science in Instrumentation and Control Engineering</p>
          <p className="text-sm text-muted-foreground">Rizal Technological University, Batch 2013</p>
        </motion.section>

        <Separator className="mb-6" />

        {/* Technical Tools */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
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
        </motion.section>

        <Separator className="mb-6" />

        {/* AVEVA Certifications */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
            <Award size={14} /> AVEVA Certificates of Achievement
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-1.5 border-b border-border/50 last:border-0">
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-muted-foreground">{cert.ceu} CEU</span>
                  <span className="text-xs font-semibold text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <Separator className="mb-6" />

        {/* ISA Certifications */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
            <Award size={14} /> ISA Certificates of Completion
          </h2>
          <div className="space-y-2">
            {isaCertifications.map((cert) => (
              <div key={cert.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-1.5 border-b border-border/50 last:border-0">
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-muted-foreground">{cert.ceu} CEU</span>
                  <span className="text-xs font-semibold text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <Separator className="mb-6" />

        {/* Wonderware AVEVA Certifications */}
        <motion.section className="mb-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
            <Award size={14} /> Wonderware AVEVA Certifications
          </h2>
          <div className="space-y-2">
            {wonderwareCertifications.map((cert) => (
              <div key={cert.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-1.5 border-b border-border/50 last:border-0">
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <span className="text-xs font-semibold text-muted-foreground shrink-0">{cert.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
