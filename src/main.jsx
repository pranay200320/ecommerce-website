
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* with the help of this we can provide the support of context api in our project */}
    <ShopContextProvider>

      <App />
    </ShopContextProvider>

  </BrowserRouter>

)
