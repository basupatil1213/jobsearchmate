/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gg2l5p3KIHH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/stabs"
import { Label } from "../components/ui/slabel"
import { Input } from "../components/ui/sinput"
import { Button } from "../components/ui/sbutton"
// import { Link } from "react-router-dom"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

export default function Auth() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  const [signInformData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const [signInState, setSignInState] = useState("");

  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUpState, setSignUpState] = useState("");

  const handleSignInInputChange = (e) => {
    const { id, value } = e.target
    setSignInFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSignUpInputChange = (e) => {
    const { id, value } = e.target
    setSignUpFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSignInSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:8000/user/signin", signInformData);
      console.log(`Response: ${JSON.stringify(response)}`);

      if (response.status === 200 || response.status === 201) {
        // redirect to dashboard
        setSignInState("success");
        setTimeout(() => {
        navigate("/");
        }, 1000);

      }
      else
      {
        // show error message
        setSignInState("failed");
      }
    }
    catch(error)
    {
      setSignInState("failed");
      console.log(`Error: ${error}`);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:8000/user/signup", signUpFormData);
      console.log(`Response: ${JSON.stringify(response)}`);

      if (response.status === 201 || response.status === 200) {
        // redirect to dashboard
        setSignUpState("success");
        setTimeout(() => {
        navigate("/");
        }, 1000);
      }
      else
      {
        // show error message
        setSignUpState("failed");
      }
    }
    catch(error)
    {
      setSignUpState("failed");
      console.log(`Error: ${error}`);
    }
  }

  const handleGoogleSignIn = () => {
    
    // logic for google sign in
    console.log("Google Sign In")

    
  }


  
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
            <form className="grid w-full gap-4" onSubmit={handleSignUpSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required value={signUpFormData.name} onChange={(e) => handleSignUpInputChange(e)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={signUpFormData.email}
                  onChange={(e) => handleSignUpInputChange(e)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={signUpFormData.password}
                    onChange={(e) => handleSignUpInputChange(e)}
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              <p className="text-sm text-muted-foreground mt-1">
                Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.
              </p>
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              {signUpState === "failed" && <p className="text-red-500 text-sm">Sign up failed. Please try again.</p>}
              {signUpState === "success" && <p className="text-green-500 text-sm">Sign up successful! Redirecting...</p>}
            </form>
          </TabsContent>
          <TabsContent value="signin">
            <form className="grid w-full gap-4" onSubmit={handleSignInSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={signInformData.email}
                  onChange={(e) => handleSignInInputChange(e)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={signInformData.password}
                    onChange={(e) => handleSignInInputChange(e)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              {signInState === "failed" ? (
                <p className="text-red-500 text-sm">Invalid email or password</p>
              ) : signInState === "success" ? (
                <p className="text-green-500 text-sm">Sign in successful! Redirecting...</p>
              ) : null}
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
          <Button variant="outline" className="flex items-center justify-center gap-2" onClick={() => handleGoogleSignIn()}>
            <GoogleIcon className="h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
        {/* <div className="text-center text-sm text-muted-foreground">
          By signing up, you agree to our{" "}
          <Link href="#" className="underline" prefetch={false}>
            Terms of Service
          </Link>
          and{" "}
          <Link href="#" className="underline" prefetch={false}>
            Privacy Policy
          </Link>
          .
        </div> */}
      </div>
    </div>
  )
}

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
      </g>
    </svg>
  )
}

// function ChromeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="12" r="4" />
//       <line x1="21.17" x2="12" y1="8" y2="8" />
//       <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
//       <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
//     </svg>
//   )
// }


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


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }