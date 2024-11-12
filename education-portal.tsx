"use client"

import * as React from "react"
import { ArrowRight, Home, RotateCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  const handleRedirect = () => {
    alert("Bienvenue")
    window.location.href = "https://www.porteduc.ml/portail/oriFinder"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 px-4 py-2 text-sm text-white">
        <span>Créé par Amine inspiré du site porte educ.ml</span>
      </nav>
      
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-8 text-white shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-yellow-400">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_of-GueqJvOzq7s7ywdbMoJ9roqVZ3PWZC.png"
                alt="Logo du Ministère"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-yellow-400 md:text-left">
              <p className="font-bold">MINISTÈRE DE L&apos;ÉDUCATION NATIONALE</p>
              <p>BIENVENUE SUR LE PORTAIL DE L&apos;ÉDUCATION</p>
              <p>PLACE DE LA LIBERTÉ - BAMAKO - MALI</p>
              <p>contact@porteduc.ml</p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <Button
              size="lg"
              className="group animate-pulse bg-yellow-500 text-black hover:bg-yellow-600"
            >
              ORIENTATION 2024
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="icon"
              variant="secondary"
              onClick={handleRedirect}
              className="h-10 w-10 rounded-full"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Accueil</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-900">
              ANNÉE SCOLAIRE 2024 - 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-16 w-16 animate-spin">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lvb-a53MNwdCGTPCdDFE8cVLJ3IGw0zy9V.png"
                  alt="Icône d'identification"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">IDENTIFICATION (ORIENTATION)</h3>
              <p className="text-gray-600">Identifiez-vous, pour connaître votre orientation</p>
              
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="academie">Précisez l&apos;académie d&apos;origine</Label>
                  <Input
                    id="academie"
                    placeholder="ACADÉMIE"
                    className="transition-transform focus:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}