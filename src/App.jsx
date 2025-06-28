

import './App.css'
import Addtodo from './components/Addtodo'
import CustomCursor from './components/CustomCursor'
import Todo from './components/Todo'
import WrapOverlay from './components/WrapOverlay'

function App() {


  return (
    <>
      <div className='overflow-hidden'>
        <Addtodo/>
        <Todo /> 
        <CustomCursor/>
      
      </div>
      
    </>
  )
}

export default App
