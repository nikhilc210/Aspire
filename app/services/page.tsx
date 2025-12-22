import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Search,
  UserPlus,
  Briefcase,
  FileCheck,
  Globe,
  ShieldCheck,
  GraduationCap,
  MessageSquare,
  Trophy,
  Code,
  BookOpen,
  Target,
  Settings,
  TrendingUp,
  Heart,
  FileText,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6 animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              Comprehensive <span className="text-primary">HR Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Empowering Organizations Through People Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Aspire International, we provide comprehensive and integrated HR solutions that support the full
              employee lifecycle—from talent acquisition to capability development and organizational transformation.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-medium">
              Our services fall under three core verticals
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment & Talent Acquisition */}
      <section id="recruitment" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl">Recruitment & Talent Acquisition</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Hiring the right talent is critical to every organization's success. Aspire International offers
              end-to-end, scalable, and industry-specific recruitment solutions designed to help companies find
              exceptional people who drive performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: UserPlus,
                title: "Permanent Recruitment",
                description:
                  "We help organizations hire qualified professionals for entry, mid, and senior-level roles across industries.",
                features: [
                  "Detailed role profiling & job analysis",
                  "Multi-channel sourcing strategy",
                  "Behavioral & competency-based screening",
                  "Interview coordination & offer management",
                  "Onboarding support for smooth transitions",
                ],
                outcome: "Faster hiring cycles, better role fit, and improved retention.",
              },
              {
                icon: Search,
                title: "Executive Search",
                description: "Confidential, research-driven hiring for CXO and senior leadership positions.",
                features: [
                  "Market intelligence & leadership mapping",
                  "Discreet outreach to high-caliber candidates",
                  "In-depth evaluation of leadership style",
                  "Advisory support for structuring offers",
                ],
                outcome: "Strong, future-ready leadership that aligns with organizational vision.",
              },
              {
                icon: Users,
                title: "Volume & Project Hiring",
                description:
                  "Rapid workforce deployment for business expansions, bulk hiring, or seasonal requirements.",
                features: [
                  "Nationwide talent pool access",
                  "Assessment centers & bulk screening",
                  "High-volume interview management",
                  "Seamless onboarding coordination",
                ],
                outcome: "Large teams deployed efficiently without compromising on quality.",
              },
              {
                icon: Briefcase,
                title: "Contract Staffing & Workforce Augmentation",
                description:
                  "Flexible staffing solutions to meet project-based needs while maintaining operational agility.",
                features: [
                  "Sourcing & onboarding of temporary resources",
                  "Comprehensive payroll & compliance administration",
                  "Timesheet & attendance tracking",
                  "Contract renewals & redeployment",
                ],
                outcome: "Reduced hiring cost, workforce flexibility, and uninterrupted project delivery.",
              },
              {
                icon: FileCheck,
                title: "Recruitment Process Outsourcing (RPO)",
                description:
                  "Optimize your hiring function with our dedicated recruitment teams and process expertise.",
                features: [
                  "Dedicated recruiters assigned to your business",
                  "ATS-driven hiring workflows",
                  "Custom hiring dashboards & metrics",
                  "SLA-based delivery with continuous improvement",
                ],
                outcome: "Cost-effective, scalable, and high-quality hiring engine.",
              },
              {
                icon: Globe,
                title: "International Recruitment",
                description:
                  "Global talent solutions for industries such as Oil & Gas, Construction, Hospitality, Healthcare, and Engineering.",
                features: [
                  "International sourcing & trade testing",
                  "Document verification & visa processing support",
                  "Deployment management",
                  "Compliance with overseas regulations",
                ],
                outcome: "Reliable cross-border workforce solutions delivered with speed and compliance.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-serif font-semibold text-xl">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Our strengths:</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Outcome:</span>{" "}
                      <span className="text-muted-foreground">{service.outcome}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-primary/20">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-serif font-semibold text-xl">Assessment & Verification Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make confident hiring decisions with reliable evaluation tools including psychometric assessments,
                    technical skills testing, background verification (education, employment, criminal checks), and
                    reference checks.
                  </p>
                  <p className="text-sm pt-2">
                    <span className="font-medium text-primary">Outcome:</span>{" "}
                    <span className="text-muted-foreground">Lower hiring risk and higher workforce integrity.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Training & Development Solutions */}
      <section id="training" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl">Training & Development Solutions</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              We design and deliver learning experiences that transform individuals and teams. Our programs are
              practical, engaging, and results-driven—ensuring measurable improvements in performance and behavior.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                icon: MessageSquare,
                value: "soft-skills",
                title: "Soft Skills & Behavioral Training",
                description: "Develop essential workplace competencies for personal and professional effectiveness.",
                topics: [
                  "Communication & presentation skills",
                  "Emotional intelligence",
                  "Conflict resolution & problem solving",
                  "Business etiquette",
                  "Team building & collaboration",
                ],
              },
              {
                icon: Trophy,
                value: "leadership",
                title: "Leadership & Managerial Development",
                description:
                  "Strengthen your leadership pipeline with programs designed for every level—from first-time managers to senior leaders.",
                topics: [
                  "Strategic thinking & decision making",
                  "Coaching & team leadership",
                  "Performance management",
                  "Delegation, accountability & change leadership",
                ],
              },
              {
                icon: Target,
                value: "functional",
                title: "Functional & Role-Based Training",
                description: "Improve functional excellence and job-specific performance.",
                topics: [
                  "Sales & negotiation skills",
                  "Customer service & client management",
                  "HR & recruitment mastery",
                  "Finance for non-finance managers",
                  "Operational excellence",
                ],
              },
              {
                icon: Code,
                value: "technical",
                title: "Technical & IT Skills Training",
                description: "Build digital and technical capabilities to meet evolving workplace demands.",
                topics: [
                  "Software fundamentals",
                  "Cloud & cybersecurity essentials",
                  "Data analytics",
                  "Digital productivity tools (MS Office, ERP, CRM)",
                ],
              },
              {
                icon: ShieldCheck,
                value: "compliance",
                title: "Compliance & Regulatory Training",
                description:
                  "Ensure your workforce understands and adheres to workplace policies and legal requirements.",
                topics: [
                  "POSH (Prevention of Sexual Harassment)",
                  "Code of conduct & ethics",
                  "Anti-bribery laws",
                  "Workplace health & safety",
                ],
              },
              {
                icon: BookOpen,
                value: "custom",
                title: "Custom Learning Solutions",
                description: "All training programs can be customized to your organization's goals and culture.",
                topics: [
                  "Training Needs Analysis (TNA)",
                  "Competency mapping",
                  "Custom content development",
                  "Blended learning models (classroom + virtual + e-learning)",
                  "Post-training assessments & ROI measurement",
                ],
              },
            ].map((training, index) => (
              <AccordionItem
                key={training.value}
                value={training.value}
                className="border border-border rounded-lg px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <training.icon className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="font-serif font-semibold text-lg">{training.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">{training.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Programs include:</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {training.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* People Consulting & HR Advisory */}
      <section id="consulting" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl">People Consulting & HR Advisory</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              We help organizations build strong HR foundations, optimize processes, and create people-centered
              workplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Settings,
                title: "HR Audit & Transformation",
                description: "Assess, redesign, and strengthen your HR ecosystem.",
                services: [
                  "HR process audit & gap analysis",
                  "HR digitalization",
                  "Organization structure redesign",
                  "Policy formulation & process mapping",
                ],
              },
              {
                icon: TrendingUp,
                title: "Performance Management Systems",
                description: "Develop frameworks that foster accountability, growth, and measurable outcomes.",
                services: [
                  "KPI & KRA design",
                  "OKR implementation",
                  "Performance appraisal systems",
                  "Manager training on feedback & evaluation",
                ],
              },
              {
                icon: Award,
                title: "Compensation & Benefits Advisory",
                description: "Ensure fair, competitive, and motivating reward programs.",
                services: [
                  "Salary benchmarking",
                  "Job evaluation & grading",
                  "Incentive & variable pay plans",
                  "ESOP design (for startups)",
                ],
              },
              {
                icon: Heart,
                title: "Employee Engagement & Culture Building",
                description: "Create meaningful workplace experiences and enhance employee commitment.",
                services: [
                  "Engagement surveys & diagnostics",
                  "Culture frameworks",
                  "Retention strategies",
                  "Employer branding initiatives",
                ],
              },
              {
                icon: FileText,
                title: "HR Policies & Compliance",
                description: "Set strong guidelines for consistent and compliant HR operations.",
                services: [
                  "Employee handbooks",
                  "HR policy creation",
                  "SOP development",
                  "Labour law compliance support",
                  "POSH policy documentation",
                ],
              },
              {
                icon: Users,
                title: "Talent Management & Succession Planning",
                description: "Prepare your organization for the future with structured talent development pathways.",
                services: [
                  "Competency mapping",
                  "High-potential (HiPo) identification",
                  "Career pathing",
                  "Succession planning frameworks",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-serif font-semibold text-xl">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Services include:</p>
                    <ul className="space-y-1.5">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Approach */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-center mb-12">Our Unique Approach</h2>
            <p className="text-lg text-center text-muted-foreground mb-12">What sets Aspire International apart?</p>

            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "Consultative, Business-First Mindset",
                  description: "We align every solution with your culture, strategy, and business goals.",
                },
                {
                  number: "2",
                  title: "Sector Expertise",
                  description:
                    "Dedicated teams for IT, BFSI, Manufacturing, Pharma, Retail, Logistics, Startups, and more.",
                },
                {
                  number: "3",
                  title: "Custom Solutions",
                  description: "No generic templates. Everything we build is tailored.",
                },
                {
                  number: "4",
                  title: "Technology-Enabled Delivery",
                  description: "ATS, assessments, dashboards, analytics, automated workflows.",
                },
                {
                  number: "5",
                  title: "Measurable Outcomes",
                  description: "Quality of hire, productivity improvements, engagement scores, training ROI.",
                },
                {
                  number: "6",
                  title: "Long-Term Partnership Focus",
                  description: "We don't just complete projects—we build relationships.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="hover:border-primary/50 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-serif font-bold text-xl">
                        {item.number}
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="font-serif font-semibold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance">
              Ready to Build a Stronger Workforce?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              Let's discuss how Aspire International can support your hiring, training, and HR transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Share Your Requirement
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
