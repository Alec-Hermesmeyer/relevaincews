"use client"

import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  gradient: string
}

export function FeatureCard({ icon: Icon, title, gradient }: FeatureCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-full`}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </div>
  )
}

