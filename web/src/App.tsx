import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './page/LoginPage'

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App