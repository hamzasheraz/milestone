"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    const particles: Particle[] = []
    const particleCount = 50
    const connectionDistance = 150
    const colors = ["#9333ea", "#ec4899", "#8b5cf6"]

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw meeting UI elements
    function drawMeetingUI() {
      // Draw meeting window
      ctx.fillStyle = "#ffffff"
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 200, 10)
      ctx.fill()
      ctx.stroke()

      // Draw header
      ctx.fillStyle = "#f8fafc"
      ctx.beginPath()
      ctx.roundRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 40, [10, 10, 0, 0])
      ctx.fill()

      // Draw title
      ctx.fillStyle = "#334155"
      ctx.font = "14px sans-serif"
      ctx.fillText("Weekly Team Meeting", canvas.width / 2 - 70, canvas.height / 2 - 75)

      // Draw AI assistant icon
      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()
      ctx.arc(canvas.width / 2 + 130, canvas.height / 2 - 80, 15, 0, Math.PI * 2)
      ctx.fill()

      // Draw AI icon
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      ctx.fillText("AI", canvas.width / 2 + 123, canvas.height / 2 - 75)

      // Draw meeting content
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"

      // Draw text lines
      const lines = [
        "Discussion Points:",
        "- Q1 Performance Review",
        "- New Product Launch",
        "- Team Updates",
        "",
        "Action Items:",
        "- Sarah: Prepare marketing materials",
        "- John: Update roadmap",
      ]

      lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2 - 130, canvas.height / 2 - 40 + index * 20)
      })
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      connectParticles()
      drawMeetingUI()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

