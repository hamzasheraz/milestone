"use client"

import Link from "next/link"
import { useEffect } from "react"
import { ArrowRight, Check, Zap, MessageSquare, BarChart3, Calendar, Clock, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import IntegrationShowcase from "@/components/integration-showcase"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ProcessSteps from "@/components/process-steps"

export default function Home() {
  // Handle smooth scrolling for navigation links
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is a navigation link
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()

        const targetId = target.getAttribute("href")?.substring(1)
        const targetElement = document.getElementById(targetId || "")

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Add event listener to handle navigation clicks
    document.addEventListener("click", handleNavClick)

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleNavClick)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Milestone AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#integrations" className="text-sm font-medium hover:text-primary transition-colors">
              Integrations
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <div></div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Revolutionize Your Meetings with AI
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Milestone AI transforms your meetings with automated summaries, action item extraction, sentiment
                analysis, and project management features that save time and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <HeroAnimation />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Powerful AI Meeting Assistant</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Milestone AI brings intelligence to your meetings with features designed to save time, improve
                collaboration, and drive better outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6" />}
                title="AI Attendance & Meeting Summaries"
                description="Our AI joins your meetings, captures discussions, and automatically generates comprehensive summaries with key points and decisions."
              />
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Real-Time Tracking & Sentiment Analysis"
                description="Monitor engagement levels and analyze sentiment during meetings to identify team dynamics and improve collaboration."
              />
              <FeatureCard
                icon={<Layers className="h-6 w-6" />}
                title="Project Pipeline Creation"
                description="Automatically extract action items and create Gantt chart visualizations for project tracking and deadline management."
              />
              <FeatureCard
                icon={<Calendar className="h-6 w-6" />}
                title="Calendar Integration"
                description="Seamlessly connect with your existing calendar to schedule meetings, send reminders, and track attendance."
              />
              <FeatureCard
                icon={<Clock className="h-6 w-6" />}
                title="Time-Saving Automation"
                description="Reduce meeting preparation and follow-up time by up to 80% with automated note-taking and task assignment."
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                title="Instant Insights"
                description="Get immediate access to meeting analytics, participation metrics, and actionable insights to improve future meetings."
              />
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Seamless Integrations</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Milestone AI works with your favorite tools to create a connected ecosystem that enhances productivity.
              </p>
            </div>
            <IntegrationShowcase />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Discover how Milestone AI is transforming meetings for businesses and educational institutions.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How Milestone AI Works</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Our simple process transforms your meeting workflow from start to finish.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Choose the plan that works best for your team&apos;s needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border shadow-sm flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                  <p className="text-muted-foreground">Perfect for small teams and startups.</p>
                  <ul className="space-y-2">
                    {["AI meeting attendance", "Basic summaries", "Action item extraction", "5 integrations"].map(
                      (feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg border shadow-sm relative flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-bold">Professional</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$25</span>
                    <span className="text-muted-foreground ml-1">/month per user</span>
                  </div>
                  <p className="text-muted-foreground">Ideal for growing businesses.</p>
                  <ul className="space-y-2">
                    {[
                      "Everything in Starter",
                      "Advanced summaries",
                      "Sentiment analysis",
                      "Project pipeline creation",
                      "Unlimited integrations",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg border shadow-sm flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$50</span>
                     <span className="text-muted-foreground ml-1">/per large scale enterprise</span>
                  </div>
                  <p className="text-muted-foreground">For large organizations with specific needs.</p>
                  <ul className="space-y-2">
                    {[
                      "Everything in Professional",
                      "Custom integrations",
                      "Dedicated support",
                      "Advanced analytics",
                      "Custom AI training",
                      "On-premise deployment options",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Find answers to common questions about Milestone AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How does Milestone AI join my meetings?",
                  answer:
                    "Milestone AI integrates with popular video conferencing platforms like Zoom, Microsoft Teams, and Google Meet. Simply add our AI assistant to your meeting invite, and it will join automatically.",
                },
                {
                  question: "Is my meeting data secure?",
                  answer:
                    "Yes, we take security seriously. All meeting data is encrypted, and we comply with industry standards for data protection. We never share your data with third parties.",
                },
                {
                  question: "Can I customize the AI's behavior?",
                  answer:
                    "Absolutely. You can configure what information the AI captures, how summaries are structured, and which integrations to use for specific meetings or projects.",
                },
                {
                  question: "How accurate are the meeting summaries?",
                  answer:
                    "Our AI produces highly accurate summaries with over 95% precision. The system continuously improves through machine learning to better understand your team's specific terminology and context.",
                },
                {
                  question: "What platforms does Milestone AI integrate with?",
                  answer:
                    "We integrate with popular tools like Slack, Trello, Asana, Google Workspace, Microsoft 365, Jira, and many more. We're constantly adding new integrations based on customer feedback.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes, we offer a 14-day free trial with no credit card required. You can experience all the features of our Professional plan during the trial period.",
                },
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-[800px] mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Meetings?</h2>
              <p className="text-xl">
                Join thousands of teams that are saving time and improving productivity with Milestone AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="default"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Milestone AI</span>
              </div>
              <p className="text-slate-400">Revolutionizing meetings with AI-powered insights and automation.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product</h3>
              <ul className="space-y-2">
                {["Features", "Integrations", "Pricing", "Roadmap", "Updates"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Help Center", "Community", "Webinars", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 Milestone AI. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

