import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // <-- Tailwind import
import App from './App' // remove the .tsx extension

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

