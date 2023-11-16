import "./App.css"
import Users from "./component/users"
import Login from "./component/login"
import CreateUser from "./component/createUser"
import {useState} from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken"))

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={token ? <Users/> : <Login token={token} setToken={setToken}/>}></Route>
          <Route path="/create" element={token ? <CreateUser/> : <Login token={token} setToken={setToken}/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App