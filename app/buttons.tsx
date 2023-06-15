"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from 'react-hot-toast';

export const LoginButton = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    return (
        <button style={{}} onClick={() => {
            setLoading(true)
            signIn()
                .then(() => {
                    console.log("successfully logged in")
                    setLoading(false)
                    router.refresh
                }).catch((e) => {
                    console.log("something went wrong in signin in")
                    toast.error("Failed to log in")
                    setLoading(false)
                    console.log(e)
                })
        }}
            className="bg-slate-950 text-white px-6 py-2 rounded-sm"
        >
            {
                loading ?
                    <>
                        Proccessing...
                    </>
                    :
                    <>
                        Sign In
                    </>

            }
        </button>
    );
};

export const RegisterButton = () => {
    return (
        <Link href="/register" style={{}}>
            Register
        </Link>
    );
};

export const LogoutButton = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    return (
        <button style={{}} onClick={() => {
            setLoading(true)
            signOut()
                .then(() => {
                    console.log("successfully logged out")
                    toast.success('successfully logged out. Redirecting')
                    setLoading(false)
                    router.refresh
                }).catch((e) => {
                    toast.error("Failed to log out")
                    console.log("something went wrong in signing out")
                    setLoading(false)
                    console.log(e)
                })
        }}
            className="bg-red-700 text-white px-6 py-2 rounded-sm"
        >
            {
                loading ?
                    <>
                        Proccessing...
                    </>
                    :
                    <>
                        Sign Out
                    </>

            }
        </button>
    );
};

export const ProfileButton = () => {
    return <Link href="/profile">Profile</Link>;
};