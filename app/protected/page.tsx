import { getCurrentUser, getCurrentUserSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'
import { LogoutButton } from '../buttons'

export default async function ProtectedPage() {

    const user = await getCurrentUserSession()
    if (!user) {
        redirect("/")
    }

    return (
        <div className="p-24">

            <p>Protected Page</p>
            <p>Logged in successfully</p>
            <pre>{JSON.stringify(user,null,3)}</pre>
            <div className='mt-4'>
                <LogoutButton />
            </div>
        </div>
    )
}
