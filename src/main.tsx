import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const redirectParam = '__spa_redirect'
const url = new URL(window.location.href)
const redirectTo = url.searchParams.get(redirectParam)
if (redirectTo) {
  url.searchParams.delete(redirectParam)
  window.history.replaceState(null, '', redirectTo)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
