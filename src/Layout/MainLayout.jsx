
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import MenuBar from '../Components/Header/Navbar'

// className='mx-2 md:mx-4 lg:mx-6 bg-[#F8F5F4]'
function MainLayout() {
  return (
    <div className='min-h-screen' style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
    }}>
     <header >
        <MenuBar/>
      </header>
      <Outlet></Outlet>
    
      <Footer></Footer>

      
    </div>
  )
}

export default MainLayout
