import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Task } from './components/Task';

import clipboard from './assets/clipboard.svg';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
    
      <div className="newTask">
          <Input />
          <Button />
      </div>
      <div className="tasks">
        <div className="info">
          <div className="created">
            <div className="tasksCreated">
              <p>Tarefas Criadas</p>
            </div>
            <div className="counter">
              <p>0</p>
            </div>
          </div>
          <div className="done">
            <div className="tasksDone">
              <p>Concluídas</p>
            </div>
            <div className="counter">
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="empty">
          <Task />
          <Task />
          <Task />
          <div className='emptyContent'>
            <img src={clipboard} alt="Clipboard" />
            <p className='boldParagraph'>Você ainda não tem tarefas cadastradas</p>
            <p className='regularParagraph'>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
