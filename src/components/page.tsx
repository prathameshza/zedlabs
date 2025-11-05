"use client"

import { useEffect, useState } from "react"

interface Stripe {
  id: number
  angle: number
  width: number
  delay: number
}

export default function Home() {
  const [stripes, setStripes] = useState<Stripe[]>([])

  useEffect(() => {
    // Generate diagonal gradient stripes with varying angles
    const newStripes: Stripe[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: 25 + i * 8,
      width: Math.random() * 80 + 40,
      delay: i * 0.3,
    }))
    setStripes(newStripes)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900" />

      {/* Animated diagonal gradient stripes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stripes.map((stripe) => (
          <div
            key={stripe.id}
            className="stripe absolute"
            style={{
              width: `${stripe.width}%`,
              height: "200%",
              background: `linear-gradient(90deg, 
                transparent, 
                rgba(59, 130, 246, 0.4), 
                rgba(34, 211, 238, 0.4), 
                rgba(168, 85, 247, 0.3), 
                rgba(59, 130, 246, 0.4), 
                transparent)`,
              transform: `rotate(${stripe.angle}deg) translateX(${stripe.delay * 20}px)`,
              animation: `slideStripe 8s ease-in-out infinite`,
              animationDelay: `${stripe.delay}s`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 flex items-center justify-between px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            {/* Logo */}
            <div className="text-2xl font-bold text-white rajdhani-semibold">zedlabs</div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                About
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <button className="px-6 py-2 bg-white text-slate-950 rounded-lg font-semibold hover:bg-white/90 transition rajdhani-semibold">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none rajdhani-bold">
              <span className="block">zedlabs</span>
            </h1>

            {/* Subheading with mixed styling */}
            <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed rajdhani-light">
              where innovation meets execution
            </p>
          </div>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed rajdhani-light">
            Build the future with cutting-edge software solutions designed for teams that think differently.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-semibold transition backdrop-blur-sm rajdhani-semibold">
              START BUILDING
            </button>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes slideStripe {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  )
}
