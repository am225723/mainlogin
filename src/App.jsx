import { useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

      setSuccess('Login successful! Welcome back.')
      console.log('User logged in:', data)
      
      // Here you would typically redirect to your app's main page
      // For demo purposes, we'll just show a success message
      
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
    // This would typically navigate to a sign-up page
    // For demo purposes, we'll show an alert
    alert('Sign up functionality would redirect to registration page')
  }

  return (
    <div className="app-container">
      {/* Animated brain background */}
      <div className="brain-background">
        <img src="/brain.jpg" alt="Brain network" />
      </div>

      {/* Electric spark overlay */}
      <div className="spark-overlay">
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
      </div>

      {/* Login card */}
      <div className="login-card">
        {/* Logo section */}
        <div className="logo-section">
          <div className="logo-container">
            <img src="/ip-logo.png" alt="Integrative Psychiatry" />
          </div>
          <div className="logo-container">
            <img src="/unleash-logo.png" alt="Unleash Your Hue" />
          </div>
        </div>

        {/* Welcome text */}
        <div className="welcome-text">
          <h1>Welcome Back</h1>
          <p>Sign in to continue your wellness journey</p>
        </div>

        {/* Error message */}
        {error && <div className="error-message">{error}</div>}

        {/* Success message */}
        {success && <div className="success-message">{success}</div>}

        {/* Login form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
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

        {/* Sign up section */}
        <div className="signup-section">
          <p>Don't have an account?</p>
          <a href="#" onClick={(e) => { e.preventDefault(); handleSignUp(); }}>
            Create Account →
          </a>
        </div>
      </div>
    </div>
  )
}

export default App