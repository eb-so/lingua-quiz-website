import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Globe className="h-6 w-6 mr-2" />
          <span className="font-bold">Lingua-Quiz</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn Languages with Lingua-Quiz
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Translate text and create quizzes from your translation history. The smart way to learn a new
                  language.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Download on the App Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12" />
                <h2 className="text-xl font-bold">Translate Text</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily translate text between multiple languages with our powerful translation engine.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-12 w-12" />
                <h2 className="text-xl font-bold">Create Quizzes</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate personalized quizzes based on your translation history to reinforce your learning.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ArrowRight className="h-12 w-12" />
                <h2 className="text-xl font-bold">Track Progress</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor your language learning progress and see your skills improve over time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Lingua-Quiz. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

