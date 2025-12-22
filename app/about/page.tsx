import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6 animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              About <span className="text-primary">Aspire International</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Your trusted partner in transforming workplaces and empowering people
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif font-bold text-2xl lg:text-3xl">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with innovative HR solutions that drive business success, foster talent
                  excellence, and create workplaces where people thrive and contribute meaningfully to organizational
                  growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="font-serif font-bold text-2xl lg:text-3xl">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted HR partner globally, recognized for delivering transformative people solutions
                  that enable organizations to build sustainable competitive advantage through their workforce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building excellence one partnership at a time
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to transform how organizations approach human capital, Aspire International has
                grown into a comprehensive HR solutions provider serving clients across multiple industries and
                geographies.
              </p>
              <p>
                What started as a boutique recruitment firm has evolved into a full-service HR consulting partner,
                offering integrated solutions across talent acquisition, learning & development, and strategic HR
                advisory services.
              </p>
              <p>
                Today, we serve over 500 organizations globally, have placed more than 10,000 professionals, trained
                over 50,000 individuals, and maintained a client satisfaction rate of 98%. But more than the numbers,
                we're proud of the lasting relationships we've built and the transformative impact we've had on our
                clients' businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We are committed to delivering the highest quality in every engagement.",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We believe in building long-term relationships based on trust and mutual success.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously evolve our methods to meet changing business needs.",
              },
              {
                icon: Eye,
                title: "Integrity",
                description: "We operate with transparency, ethics, and accountability in all we do.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
