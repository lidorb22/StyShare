import '../styles/globals.css'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return (<div className="font-rubik">
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
