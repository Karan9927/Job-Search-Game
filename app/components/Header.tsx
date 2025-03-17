import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="p-6 bg-primary text-primary-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Guhuza Job-Seeking Game
        </Link>
        <nav className="space-x-4">
          <Link href="/" passHref>
            <Button variant="secondary">Home</Button>
          </Link>
          <Link href="/game" passHref>
            <Button variant="secondary">Play Game</Button>
          </Link>
          <Link href="/leaderboard" passHref>
            <Button variant="secondary">Leaderboard</Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant="secondary">Profile</Button>
          </Link>
          <Link href="/login" passHref>
            <Button variant="secondary">Login</Button>
          </Link>
          <Link href="/signup" passHref>
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

