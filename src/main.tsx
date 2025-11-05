import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/fontawesome'
import { initializeTheme } from './store/themeStore'
import App from './App.tsx'

// Initialize theme
initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
