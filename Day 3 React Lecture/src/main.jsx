import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App,{h2} from './App.jsx'
import App from "./App.jsx"

console.log("App :" ,App())
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* {h1}
  {parent} */}

{/* {h2} */}
{/* {App()} --> This is older way */}

{/* <App></App>  --> This is new to call jsx*/}

{/* <h1></h1> */}

<App></App>

  </StrictMode>,
)

