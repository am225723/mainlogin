# Mental Health Wellness App - Login Page

A sophisticated, calming login page designed for a mental health wellness application with Supabase authentication integration.

## 🎨 Features

### Design Elements
- **Modern, Calming Aesthetic**: Carefully chosen color palette with teal, cyan, and soft gradients
- **Animated Brain Background**: Floating brain graphic with subtle pulsing effect
- **Electric Spark Effects**: Animated sparks that create an engaging visual experience
- **Glass Morphism Design**: Frosted glass effect with backdrop blur for a modern look
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

### Functionality
- **Supabase Authentication**: Full integration with Supabase Auth
- **Email/Password Login**: Standard authentication flow
- **Password Visibility Toggle**: Show/hide password functionality
- **Forgot Password**: Password reset email functionality
- **Sign Up Navigation**: Link to create new account
- **Loading States**: Spinner animation during authentication
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation messages for successful actions

### Animations (All Implemented)
1. ✅ **Smooth Fade-in on Page Load**: Card and elements fade in sequentially
2. ✅ **Floating/Pulsing Brain Graphic**: Background brain animates continuously
3. ✅ **Button Hover Effects**: Gradient transitions and elevation changes
4. ✅ **Input Field Focus Animations**: Smooth transitions with glow effects
5. ✅ **Loading Spinner**: Rotating spinner during authentication
6. ✅ **Electric Spark Effect**: Animated sparks around the interface

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd mental-health-login
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🔧 Configuration

### Supabase Setup

The app is already configured with your Supabase credentials:

- **URL**: `https://froxodstewdswllgokmu.supabase.co`
- **Anon Key**: Already configured in `src/supabaseClient.js`

### Customization

#### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-teal: #4A9B9B;
  --accent-cyan: #5DD5E8;
  /* ... more colors */
}
```

#### Logos
Replace the logo files in the `public` folder:
- `ip-logo.png` - Integrative Psychiatry logo
- `unleash-logo.png` - Unleash Your Hue logo
- `brain.jpg` - Brain background graphic

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🎯 Usage

### Login Flow
1. User enters email and password
2. Clicks "Sign In" button
3. Supabase authenticates the credentials
4. Success message displays on successful login
5. Error message displays if authentication fails

### Forgot Password Flow
1. User enters email address
2. Clicks "Forgot Password?" link
3. Password reset email is sent via Supabase
4. User receives email with reset link

### Sign Up Flow
1. User clicks "Create Account" link
2. Currently shows alert (implement your sign-up page)
3. Redirect to registration page

## 🛠️ Tech Stack

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Supabase**: Backend as a Service for authentication
- **CSS3**: Custom animations and modern styling
- **JavaScript ES6+**: Modern JavaScript features

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎨 Design Philosophy

The design focuses on creating a calming, trustworthy environment appropriate for mental health applications:

- **Calming Colors**: Teal and cyan tones promote relaxation
- **Smooth Animations**: Gentle transitions reduce anxiety
- **Clear Hierarchy**: Easy-to-understand interface
- **Accessibility**: Focus states and proper contrast ratios
- **Professional**: Builds trust with users

## 🔐 Security Notes

- Never commit Supabase keys to public repositories
- Use environment variables for production
- Implement rate limiting for authentication attempts
- Enable email verification in Supabase dashboard
- Configure proper Row Level Security (RLS) policies

## 📄 File Structure

```
mental-health-login/
├── public/
│   ├── brain.jpg              # Brain background image
│   ├── ip-logo.png            # Integrative Psychiatry logo
│   └── unleash-logo.png       # Unleash Your Hue logo
├── src/
│   ├── App.css                # Main styles with animations
│   ├── App.jsx                # Main component with auth logic
│   ├── index.css              # Global styles
│   ├── main.jsx               # React entry point
│   └── supabaseClient.js      # Supabase configuration
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Supabase connection errors**
   - Verify your Supabase URL and anon key
   - Check if your Supabase project is active
   - Ensure email auth is enabled in Supabase dashboard

3. **Images not loading**
   - Verify images are in the `public` folder
   - Check file names match exactly (case-sensitive)

## 📝 Next Steps

1. **Implement Sign-Up Page**: Create a registration form
2. **Add Social Auth**: Google, Apple, or other providers
3. **Dashboard Redirect**: Navigate to main app after login
4. **Remember Me**: Add persistent session option
5. **Two-Factor Auth**: Enhanced security option
6. **Password Strength Meter**: Visual feedback for passwords

## 📞 Support

For issues or questions about this implementation, please refer to:
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 📜 License

This project is created for your mental health wellness application.

---

**Built with ❤️ for mental health and wellness**