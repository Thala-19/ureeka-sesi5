// app/page.tsx
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to my App</h1>

      <SignedIn>
        <p className="text-lg text-green-600">✅ You are signed in.</p>
      </SignedIn>

      <SignedOut>
        <p className="text-lg text-red-600 mb-2">You are not signed in.</p>
        <div className="space-x-4">
          <SignInButton>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>
    </main>
  );
}
