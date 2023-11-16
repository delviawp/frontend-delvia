import "./App.css"
import Users from "./component/users"
import Login from "./component/login"
import {useState} from "react"


function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken"))

  return (
    <>
    <div className="App">

      {token ? <Users/> : <Login token={token} setToken={setToken}/>}
    </div>
    </>
  )
}

export default App