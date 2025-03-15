"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 20000,
  mapBrightness: 6,
  baseColor: [0.3, 0.8, 0.8],
  markerColor: [0.1, 0.8, 0.8],
  glowColor: [0.2, 0.8, 0.8],
  offset: [0, 0],
  scale: 1,
  markers: [
    // Europa
    { location: [52.5200, 13.4050], size: 0.1 }, // Berlin
    { location: [48.8566, 2.3522], size: 0.08 },  // Paris
    { location: [51.5074, -0.1278], size: 0.09 }, // London
    // DACH Region
    { location: [47.3769, 8.5417], size: 0.07 },  // Zürich
    { location: [48.2082, 16.3738], size: 0.07 }, // Wien
    // Nordamerika
    { location: [40.7128, -74.0060], size: 0.1 }, // New York
    { location: [37.7749, -122.4194], size: 0.09 }, // San Francisco
    // Asien
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [22.3193, 114.1694], size: 0.08 }, // Hong Kong
    { location: [1.3521, 103.8198], size: 0.07 },  // Singapur
  ]
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.003
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 rounded-full [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
} 