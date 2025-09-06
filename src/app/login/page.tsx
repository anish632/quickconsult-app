'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Stethoscope, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'patient' // patient, consultant, admin
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
    
    // Redirect based on user type
    const dashboardUrl = `/dashboard/${formData.userType}`
    window.location.href = dashboardUrl
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">QuickConsult</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* User Type Selection */}
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                I am a:
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="patient">Patient - Seeking Medical Advice</option>
                <option value="consultant">Medical Consultant - Providing Expertise</option>
                <option value="admin">Administrator - System Management</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>

          {/* Sign Up Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup/patient" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up as Patient
              </Link>
              {' '}or{' '}
              <Link href="/signup/consultant" className="text-blue-600 hover:text-blue-800 font-medium">
                Join as Medical Expert
              </Link>
            </p>
          </div>
        </form>

        {/* Demo Account Info */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Demo Accounts:</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>Patient: patient@demo.com / demo123</div>
            <div>Consultant: doctor@demo.com / demo123</div>
            <div>Admin: admin@demo.com / demo123</div>
          </div>
        </div>
      </div>
    </div>
  )
}
