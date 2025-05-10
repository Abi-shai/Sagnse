import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router";
import './utils/i18n.js'

import App from './app/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<p>Chargement...</p>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
)
