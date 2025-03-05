"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Milestone AI has transformed how we conduct meetings. We save hours each week on note-taking and follow-ups, allowing our team to focus on what matters most.",
    author: "Sarah Johnson",
    role: "Director of Operations",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The AI-generated summaries are incredibly accurate, and the action item tracking has improved our team's accountability. It's like having an extra team member in every meeting.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Solutions",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As an educational institution, we've seen tremendous benefits from using Milestone AI in our faculty meetings. The sentiment analysis helps us understand engagement and improve our discussions.",
    author: "Dr. Emily Rodriguez",
    role: "Dean of Students",
    company: "Westfield University",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The Gantt chart pipeline feature has revolutionized how we track projects from inception to completion. Everything is automatically organized from our meeting discussions.",
    author: "David Park",
    role: "CTO",
    company: "Future Systems",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextTestimonial])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="bg-white p-8 md:p-12 rounded-lg shadow-md"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div className="text-primary mb-6">
          <Quote className="h-10 w-10 opacity-50" />
        </div>
        <div className="space-y-6">
          <p className="text-lg md:text-xl italic">{testimonials[currentIndex].quote}</p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">{testimonials[currentIndex].author}</h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="h-8 w-8 rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full p-0 ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="h-8 w-8 rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

