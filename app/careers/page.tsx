import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Target,
  Heart,
  TrendingUp,
  Award,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior HR Consultant",
      department: "HR Advisory",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Lead HR transformation projects for enterprise clients, design talent management frameworks, and implement organizational development initiatives.",
    },
    {
      title: "Recruitment Manager",
      department: "Talent Acquisition",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Manage end-to-end recruitment for IT and technology clients, lead a team of recruiters, and build strategic hiring partnerships.",
    },
    {
      title: "Learning & Development Specialist",
      department: "Training",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Design and deliver training programs in leadership, soft skills, and technical domains. Create engaging learning experiences.",
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Delhi NCR, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Identify new business opportunities, build client relationships, and drive growth across our recruitment, training, and consulting verticals.",
    },
    {
      title: "Talent Acquisition Intern",
      department: "Recruitment",
      location: "Remote",
      type: "Internship",
      experience: "0-1 years",
      description:
        "Support recruitment operations, learn sourcing strategies, conduct candidate screenings, and gain hands-on experience in the HR industry.",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths, promotions, and leadership opportunities",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Access to training programs, certifications, and skill development",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, remote options, and supportive culture",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance bonuses, awards, and appreciation programs",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate teams on impactful HR transformation projects",
    },
    {
      icon: Target,
      title: "Competitive Compensation",
      description: "Industry-leading salaries and comprehensive benefits package",
    },
  ]

  const values = [
    {
      title: "People First",
      description:
        "We believe in putting people at the heart of everything we do, whether it's our clients or our team.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in service delivery, innovation, and professional development.",
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, ethical practices, and honest communication.",
    },
    {
      title: "Innovation",
      description: "We embrace new ideas, technologies, and methodologies to solve complex HR challenges.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-1 w-fit">
                Join Our Team
              </Badge>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
                Build Your Career at <span className="text-primary">Aspire International</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Be part of a dynamic team that's transforming the HR landscape. We're looking for passionate
                professionals who want to make a real impact in the world of talent and organizational development.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative lg:h-[500px] h-[400px]">
              <img
                src="/happy-diverse-employees-working-together-in-modern.jpg"
                alt="Our team at work"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl xl:text-5xl text-balance">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-serif font-semibold text-xl text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl xl:text-5xl text-balance">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Benefits and perks that make Aspire International a great place to work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl xl:text-5xl text-balance">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore current opportunities across our teams
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif font-semibold text-xl lg:text-2xl mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground lg:text-right whitespace-nowrap">
                      <span className="font-medium">Experience:</span> {job.experience}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5 group bg-transparent"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
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
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-balance">Don't See the Right Role?</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
                opportunities.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Send Your Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
