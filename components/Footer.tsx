import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Guhuza</h3>
            <p className="text-sm text-muted-foreground">
              Guhuza is a gamified job-seeking platform designed to help you enhance your skills and land your dream
              job.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/game" className="text-sm hover:underline">
                  Play Game
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-sm hover:underline">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              Email: support@guhuza.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Guhuza. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

