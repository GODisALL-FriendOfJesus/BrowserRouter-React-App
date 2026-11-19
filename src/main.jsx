import { createRoot } from "react-dom/client"
import {BrowserRouter, Routes,Route} from "react-router"

import App from "./App"
import { StrictMode } from "react"
const root = createRoot(document.getElementById("root"))

 

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
     
    </BrowserRouter>
    </StrictMode>
    
);
