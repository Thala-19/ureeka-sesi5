import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <UserButton />
        <h1>Welcome, you're signed in!</h1>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to view this page.</p>
      </SignedOut>
    </>
  )
}
