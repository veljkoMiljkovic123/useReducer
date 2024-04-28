import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      errorElement:<h1>Nemam ovu stranicu sorry</h1>,
      children:[
        {
          path:'/',
          element:<HomePage />
        },
        {
          path:'/products',
          element:<ProductsPage />
        }
      ]

    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
