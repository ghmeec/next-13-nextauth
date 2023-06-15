import Image from 'next/image'
import { LoginButton } from './buttons'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Home() {

  const user = await getCurrentUser()
  if (user) {
    redirect("/protected")
  }

  return (
    <main className="p-12">
      <p>Next Auth Page</p>
      <div className="mt-4">
        <LoginButton />
      </div>
    </main>
  )
}
