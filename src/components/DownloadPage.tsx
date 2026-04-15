"use client"

import { useEffect, useState } from "react"

interface DownloadPageProps {
  title: string;
  logoSrc: string;
  downloadLink: string;
  version: string;
  platform: string;
}

export default function DownloadPage({
  title,
  logoSrc,
  downloadLink,
  version,
  platform
}: DownloadPageProps) {

  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (savedTheme) { setTheme(savedTheme) }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const effectiveTheme = theme === "system" ? systemTheme : theme

    if (effectiveTheme === "dark") { root.classList.add("dark") }
    else { root.classList.remove("dark") }

    if (theme !== "system") { localStorage.setItem("theme", theme) }
    else { localStorage.removeItem("theme") }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        return systemTheme === "dark" ? "light" : "dark"
      }
      return prev === "dark" ? "light" : "dark"
    })
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-background">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 flex items-center justify-between px-4 md:px-6 py-3 rounded-xl bg-card/50 backdrop-blur-md border border-border shadow-sm">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img src="/zedlabs_logo.png" alt="zedlabs" className="h-8 md:h-10 w-auto" />
            </a>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50">
                {mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-3xl w-full text-center space-y-8">
          
          {/* App Logo */}
          <div className="flex justify-center">
            <img
              src={logoSrc}
              alt={`${title} Logo`}
              className="w-32 h-32 md:w-48 md:h-48 rounded-4xl shadow-lg border border-border/50"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground quicksand-bold">Download {title}</h1>
            <p className="text-xl text-muted-foreground quicksand-medium">Desktop Client for {platform}</p>
          </div>

          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
            <div className="flex flex-col items-center gap-4">
              <a
                href={downloadLink}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-xl hover:opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95 quicksand-bold"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for Windows
              </a>
              <p className="text-sm text-muted-foreground quicksand-regular">
                Version {version} • Windows 10/11 (x64)
              </p>
            </div>

            <div className="pt-6 border-t border-border/50 text-left space-y-4">
              <h3 className="text-lg font-bold text-foreground quicksand-semibold">Installation Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground quicksand-regular">
                <li>Download the <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">PocketController.Setup.1.0.0.exe</code> installer.</li>
                <li>Run the installer and follow the on-screen instructions.</li>
                <li>Once installed, launch PocketController from your desktop or start menu.</li>
                <li>Ensure your mobile device and PC are on the same network for connection.</li>
              </ol>
            </div>
          </div>

          <p className="text-muted-foreground quicksand-regular">
            Looking for the mobile app? <a href="/pocketcontroller" className="text-primary hover:underline">Go back to product page</a>
          </p>
        </div>
      </main>

    </div>
  )
}
