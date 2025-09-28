import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import Job from './components/Job.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GeneralInfo />
    <Job />
  </StrictMode>,
)
