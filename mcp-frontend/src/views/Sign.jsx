'use client'

import { useState } from 'react'
import Link from 'next/link'

const Sign = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const field =
    'w-full rounded-xl border border-white/[0.08] bg-claude-surface px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition focus:ring-2 focus:ring-white/10'

  return (
    <div className="flex min-h-[70vh] flex-col justify-center px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-neutral-100 sm:text-4xl">Create account</h2>
          <p className="mt-2 text-sm text-neutral-500">Join MCP Store</p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-claude-surface/40 p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-xs font-medium text-neutral-500">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={field}
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-xs font-medium text-neutral-500">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={field}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium text-neutral-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={field}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-xs font-medium text-neutral-500">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={field}
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-xs font-medium text-neutral-500">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={field}
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-neutral-200 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white"
            >
              Create account
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-claude-surface/40 px-3 text-neutral-600">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => console.log('Google sign up clicked')}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/[0.05]"
            >
              Google
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-neutral-200 underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Sign
