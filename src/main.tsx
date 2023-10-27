import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '../src//assets/index.css'
import App from './App.tsx'
import { ContextProvider } from './context/Context.tsx'
import { store } from './store/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </Provider>


)
