import './App.css'

//components
import CardNews from './components/CardNews'
import {Sidebar} from './components/Sidebar'


//

function App() {


  return (
    <div>
      <Sidebar/>
      <div className='container'>  
        <div>
          
          <CardNews/>
        </div>  
      </div>
    </div>
  )
}

export default App
