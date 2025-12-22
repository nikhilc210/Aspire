import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, GraduationCap, Briefcase, CheckCircle, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
                Empowering Organizations Through <span className="text-primary">People Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                Comprehensive HR solutions that support the full employee lifecycle—from talent acquisition to
                capability development and organizational transformation.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Link href="/services">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[500px] h-[400px]">
              <img
                src="/professional-business-team-collaboration-in-modern.jpg"
                alt="Professional team collaboration"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "500+", label: "Companies Served" },
              { value: "10K+", label: "Positions Filled" },
              { value: "50K+", label: "Professionals Trained" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="font-serif font-bold text-3xl lg:text-4xl text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl xl:text-5xl text-balance">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Three integrated verticals designed to transform your workforce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Recruitment & Talent Acquisition",
                description:
                  "End-to-end hiring solutions from permanent recruitment to executive search and international staffing.",
                features: ["Permanent Recruitment", "Executive Search", "Contract Staffing", "RPO Solutions"],
                color: "text-primary",
                bgColor: "bg-primary/5",
              },
              {
                icon: GraduationCap,
                title: "Training & Development",
                description:
                  "Transform individuals and teams with practical, engaging, and results-driven learning experiences.",
                features: ["Leadership Training", "Soft Skills Development", "Technical Training", "Custom Programs"],
                color: "text-secondary",
                bgColor: "bg-secondary/5",
              },
              {
                icon: Briefcase,
                title: "HR Consulting & Advisory",
                description: "Build strong HR foundations, optimize processes, and create people-centered workplaces.",
                features: ["HR Transformation", "Performance Systems", "Policy Development", "Talent Management"],
                color: "text-accent",
                bgColor: "bg-accent/5",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl lg:text-2xl text-balance">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 ${service.color} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button variant="ghost" className="w-full justify-between group/btn mt-4">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl xl:text-5xl text-balance">
              Why Aspire International?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              What sets us apart in the HR consulting landscape
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
              <img
                src="/diverse-business-professionals-in-strategic-meetin.jpg"
                alt="Strategic HR consulting"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="grid gap-6 order-1 lg:order-2">
              {[
                {
                  icon: Target,
                  title: "Business-First Mindset",
                  description: "We align every solution with your culture, strategy, and business goals.",
                },
                {
                  icon: Users,
                  title: "Sector Expertise",
                  description: "Dedicated teams for IT, BFSI, Manufacturing, Pharma, Retail, and Startups.",
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Outcomes",
                  description: "Quality of hire, productivity improvements, and training ROI tracking.",
                },
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Briefcase,
                title: "Custom Solutions",
                description: "No generic templates. Everything we build is tailored to your needs.",
              },
              {
                icon: CheckCircle,
                title: "Technology-Enabled",
                description: "ATS, assessments, dashboards, analytics, and automated workflows.",
              },
              {
                icon: GraduationCap,
                title: "Long-Term Partnership",
                description: "We don't just complete projects—we build lasting relationships.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 lg:p-12 text-center space-y-6">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance">
                Ready to Build a Stronger Workforce?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
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
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
