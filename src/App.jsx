import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
