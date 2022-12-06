import './App.css'
import Boton from './componentes/Boton'
import TaskForm from './componentes/TaskForm'
import TaskList from './componentes/TaskList'
import TaskTitle from './componentes/taskTitle'

function App() {
  return (
    <div className="App bg-zinc-900 h-screen">
      <main className='bg-zinc-900 '>
      <div className='container mx-auto'>
    <TaskTitle/>
        
     {/* <Boton /> */}
    <TaskForm />
    <TaskList />
      </div>
      </main>
    </div>
  )
}

export default App