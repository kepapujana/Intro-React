import './App.css'
import Person from './components/welcome/Person'
import WelcomeClass from './components/welcome/WelcomeClass'

function App() {

  return (
    <div>
      <Person name="Pedro" surname="Pujana" age="50" />
      <Person name="Joana" surname="Lopez" age="30" />
      <Person name="Kepa" surname="Pujana" age="24" />
      <Person name="Jose" surname="Pedro" age="59" />
      <WelcomeClass name="Mariana" surname="Lekue" age="79" />
    </div>
  )
}

export default App
