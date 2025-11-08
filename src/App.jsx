import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) throw error

      setSuccess('Login successful! Welcome back to your wellness journey.')
      console.log('User logged in:', data)
      
    } catch (error) {
      setError(error.message || 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first')
      return
    }

    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      })

      if (error) throw error

      setSuccess('Password reset email sent! Please check your inbox.')
    } catch (error) {
      setError(error.message || 'An error occurred sending reset email')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = () => {
    alert('Sign up functionality would redirect to registration page')
  }

  return (
    <div className="app-container">
      {/* Advanced animated mesh background */}
      <div className="mesh-background">
        <div className="mesh-gradient"></div>
      </div>

      {/* Premium particle system */}
      <div className="particle-container">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Enhanced brain background */}
      <div className="brain-background">
        <img src="/brain.jpg" alt="Brain network" />
      </div>

      {/* Premium electric spark network */}
      <div className="spark-network">
        <div className="neural-node" style={{ top: '20%', left: '15%' }}></div>
        <div className="neural-node" style={{ top: '40%', left: '80%' }}></div>
        <div className="neural-node" style={{ top: '60%', left: '25%' }}></div>
        <div className="neural-node" style={{ top: '75%', left: '70%' }}></div>
        <div className="neural-node" style={{ top: '30%', left: '50%' }}></div>
        <div className="neural-node" style={{ top: '85%', left: '40%' }}></div>
        
        <div className="neural-connection" style={{ 
          top: '20%', 
          left: '15%', 
          width: '65%', 
          transform: 'rotate(15deg)',
          animationDelay: '0.5s'
        }}></div>
        <div className="neural-connection" style={{ 
          top: '40%', 
          left: '25%', 
          width: '55%', 
          transform: 'rotate(-20deg)',
          animationDelay: '1s'
        }}></div>
        <div className="neural-connection" style={{ 
          top: '60%', 
          left: '25%', 
          width: '45%', 
          transform: 'rotate(30deg)',
          animationDelay: '1.5s'
        }}></div>
      </div>

      {/* Premium login card */}
      <div className="login-card">
        {/* Enhanced logo section */}
        <div className="logo-section">
          <div className="logo-container">
            <img src="/ip-logo.png" alt="Integrative Psychiatry" />
          </div>
          <div className="logo-container">
            <img src="/unleash-logo.png" alt="Unleash Your Hue" />
          </div>
        </div>

        {/* Enhanced welcome text */}
        <div className="welcome-text">
          <h1>Welcome Back</h1>
          <p>Continue your journey to mental wellness and inner peace</p>
        </div>

        {/* Premium error message */}
        {error && <div className="error-message">{error}</div>}

        {/* Premium success message */}
        {success && <div className="success-message">{success}</div>}

        {/* Enhanced login form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={loading}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading && <span className="spinner"></span>}
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Enhanced signup section */}
        <div className="signup-section">
          <p>New to your wellness journey?</p>
          <a href="#" onClick={(e) => { e.preventDefault(); handleSignUp(); }}>
            Create Account →
          </a>
        </div>
      </div>
    </div>
  )
}

export default App