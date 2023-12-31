import React from 'react'
import { createRoot } from 'react-dom/client'
import { Content } from './Content.tsx'
import './index.css'

const container = document.createElement('div')
container.id = 'crx-root'
document.body.appendChild(container)

if (!container) {
  throw new Error('The root app-container was not found. Failed to mount the application')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
)
