/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gg2l5p3KIHH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/stabs"
import { Label } from "../components/ui/slabel"
import { Input } from "../components/ui/sinput"
import { Button } from "../components/ui/sbutton"
import { Link } from "react-router-dom"

export default function Auth() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#F0F4FF] to-[#E6F0FF] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 rounded-lg bg-white p-8 shadow-lg md:w-[550px]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to JobMate</h1>
          <p className="text-muted-foreground">Streamline your job search with our AI-powered resume analysis.</p>
        </div>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <form className="grid w-full gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signin">
            <form className="grid w-full gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        <div className="flex w-full items-center justify-center gap-2">
          <div className="h-[1px] flex-1 bg-muted" />
          <p className="text-xs text-muted-foreground">or</p>
          <div className="h-[1px] flex-1 bg-muted" />
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <GithubIcon className="h-5 w-5" />
            Sign in with GitHub
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <ChromeIcon className="h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          By signing up, you agree to our{" "}
          <Link href="#" className="underline" prefetch={false}>
            Terms of Service
          </Link>
          and{" "}
          <Link href="#" className="underline" prefetch={false}>
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}