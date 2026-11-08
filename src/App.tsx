import './index.css'
import { Login } from './login'
import Side from './side'

function App() {


  return (
    <>
      <Login />
      <Side name="Abdirizak" phone="0630000000" age={25} />
    </>
  )
}

export default App