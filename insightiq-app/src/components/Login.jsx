import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="flex">
      {/* Left Side - Branding */}
      <div className="flex-1 bg-blue-600 relative overflow-hidden flex flex-col justify-center items-start p-12">
        {/* Logo and Branding */}
        <div className="relative z-10 text-white">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">InsightIQ</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-md">
            Streamline your workflow with our powerful tools
          </p>
        </div>

        {/* Network Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <svg className="w-96 h-96 opacity-30" viewBox="0 0 400 400" fill="none">
            {/* Network nodes */}
            {/* <circle cx="200" cy="200" r="20" fill="#1e40af" stroke="white" strokeWidth="2" />
            <text x="200" y="205" textAnchor="middle" fill="white" className="text-sm font-bold">FF</text> */}
            
            {/* Surrounding nodes */}
            {/* <circle cx="120" cy="120" r="12" fill="#f97316" />
            <circle cx="280" cy="120" r="12" fill="#10b981" />
            <circle cx="120" cy="280" r="12" fill="#8b5cf6" />
            <circle cx="280" cy="280" r="12" fill="#f59e0b" />
            
            <circle cx="80" cy="200" r="10" fill="#ef4444" />
            <circle cx="320" cy="200" r="10" fill="#06b6d4" />
            <circle cx="200" cy="80" r="10" fill="#84cc16" />
            <circle cx="200" cy="320" r="10" fill="#ec4899" /> */}
            
            {/* Additional smaller nodes */}
            {/* <circle cx="60" cy="160" r="8" fill="#374151" />
            <circle cx="340" cy="160" r="8" fill="#374151" />
            <circle cx="160" cy="60" r="8" fill="#374151" />
            <circle cx="240" cy="340" r="8" fill="#374151" />
            
            <circle cx="140" cy="180" r="6" fill="#6b7280" />
            <circle cx="260" cy="220" r="6" fill="#6b7280" />
            <circle cx="180" cy="140" r="6" fill="#6b7280" />
            <circle cx="220" cy="260" r="6" fill="#6b7280" /> */}

            {/* Connection lines */}
            {/* <line x1="200" y1="200" x2="120" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="280" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="120" y2="280" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="280" y2="280" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="80" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="320" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="200" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="200" y1="200" x2="200" y2="320" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /> */}
            
            {/* Secondary connections */}
            {/* <line x1="120" y1="120" x2="80" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="280" y1="120" x2="320" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="120" y1="280" x2="200" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="280" y1="280" x2="340" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" /> */}
            
            {/* More connections */}
            {/* <line x1="140" y1="180" x2="120" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="260" y1="220" x2="280" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="180" y1="140" x2="200" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="220" y1="260" x2="280" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" /> */}
          {/* </svg>  */}
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex flex-col justify-center px-12 py-8">
        <div className="max-w-md w-full mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              Welcome back 
              <span className="ml-2 text-2xl">👋</span>
            </h2>
            <p className="text-gray-600">Please enter your details to sign in</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
              </div>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            
            <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}