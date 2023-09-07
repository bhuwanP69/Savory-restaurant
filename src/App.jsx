import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './routes/Home'
import NotFound from './routes/NotFound'

// layouts
import RootLayout from './layout/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
        <Route path='*' element ={<NotFound/>}/>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App