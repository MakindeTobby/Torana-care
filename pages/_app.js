import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import '@/styles/globals.css'
import 'animate.css';
// import '../node_modules/flowbite/dist/flowbite'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
