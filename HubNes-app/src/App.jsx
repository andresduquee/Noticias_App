import './App.css'

//components
import CardNews from './components/CardNews'
import {Sidebar} from './components/Sidebar'
import Footer from './components/footer'


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
      <footer><Footer/></footer>
          
    </div>

  )
}

export default App
