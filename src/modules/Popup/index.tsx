import React from 'react'
import { createRoot } from 'react-dom/client'
import { Popup } from './Popup.tsx'

const container = document.getElementById('app-container')

if (!container) {
  throw new Error('The root app-container was not found. Failed to mount the application')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
)
