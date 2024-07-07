import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MainHeader from './components/MainHeader';

function App() {

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainHeader />,
    children: [
       {
    path: '/',
    element: <Home />
  },
       {
    path: '/service',
    element: <Services />
  },
  {
    path: '/contact',
    element: <Contact />
  }
    ]
  },
 
 ]
 )



  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
