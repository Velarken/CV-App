import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import Job from './components/Job.jsx'
import Form from './components/Form.jsx'
import FormField from './components/FormField.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
