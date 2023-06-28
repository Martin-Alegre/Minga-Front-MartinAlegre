import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Main({ children }) {
  return (
    <div className="h-screen w-full bg-black p-0">
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
