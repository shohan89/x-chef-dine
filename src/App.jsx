import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto flex space-x-4 mt-12">
        <Recipes />
        <Sidebar />
      </div>
    </>
  )
}

export default App
