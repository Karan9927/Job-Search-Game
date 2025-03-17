import { Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="mt-auto p-6 bg-muted">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-center text-sm text-muted-foreground">
          Share Guhuza Job-Seeking Game with your network and earn referral bonuses!
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Guhuza Job-Seeking Game. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

