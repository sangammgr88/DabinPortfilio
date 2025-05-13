import type React from "react"
export interface SkillType {
  name: string
  percentage: number
}

export interface ExperienceType {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export interface EducationType {
  degree: string
  institution: string
  period: string
  subjects: string[]
  project: string
  achievement: string
}

export interface CertificationType {
  name: string
  description: string
}

export interface InterestType {
  name: string
  description: string
  icon: React.ReactNode
}
