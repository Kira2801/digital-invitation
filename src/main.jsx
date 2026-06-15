import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemePreview from './playground/ThemePreview.jsx'

// In development (`npm run dev`), show the multi-theme Playground so any
// template can be previewed via the dropdown. Production builds
// (`npm run build`) render the single configured theme via <App />.
const Root = import.meta.env.DEV ? ThemePreview : App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
