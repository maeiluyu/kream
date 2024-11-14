'use client'

import { signIn } from 'next-auth/react'
import { FormEvent, useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await signIn('credentials', { email, password, callbackUrl: '/' })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-6 text-2xl">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="p-2 border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="p-2 border"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Sign In
        </button>
      </form>
    </div>
  )
}
