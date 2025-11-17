import './App.css'

//components
import { Header } from './components/Header'
import CardNews from './components/CardNews'
//

function App() {


  return (
    <div>
      <Header/>
      <div className='container'>  
        <div>
          <CardNews/>
        </div>  
      </div>
    </div>
  )
}

export default App
