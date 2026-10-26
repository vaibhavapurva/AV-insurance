
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './compoments/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './compoments/About'
import Policies from './compoments/Policies'
import Body from './compoments/Body'
import { createRoot } from 'react-dom/client'
import Footer from './compoments/Footer'
import Claims from './compoments/Claims'
import Contact from './compoments/Contact'
import MotorInsurance from "./compoments/MotorInsurance"
import HealthInsurance from './compoments/HealthInsurance'
import LifeInsurance from './compoments/LifeInsurance'
import SchoolBusInsurance from './compoments/SchoolBusInsurance'
import WheelerInsurance from './compoments/WheelerInsurance'
import PickupInsurance from './compoments/PickupInsurance'
import CommercialVehicleInsurance from './compoments/CommercialVehicleInsurance'
import Ambitious from './compoments/Ambitious'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Ambitious/>
    <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/policies",
        element: <Policies/>
      },{
        path: '/claims',
        element: <Claims/>
      },{
        path:"/contact",
        element: <Contact/>
      },{
        path:"/motorInsurance",
        element : <MotorInsurance/>
      },{
        path:"/healthInsurance",
        element: <HealthInsurance/>
      }
      ,{
        path: "/lifeInsurance",
        element: <LifeInsurance/>
      },{
        path: "/schoolBusInsurance",
        element: <SchoolBusInsurance/>
      },
      {
        path: "/wheelerInsurance",
        element: <WheelerInsurance/>
      },
      {
        path: "/pickupInsurance",
        element: <PickupInsurance/>
      },
      {
        path: "/commercialVehicleInsurance",
        element: <CommercialVehicleInsurance/>
      },

    ]
  }
])

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)



