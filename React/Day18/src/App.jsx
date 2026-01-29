import "./App.css"
import LogoutBtn from "./components/LogoutBtn.jsx"
import LoginBtn from "./components/LoginBtn.jsx"
import { useState } from "react"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return (
    <div>
      <h1>
        Welcome everyone to Codehelp web dev course
      </h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn setLoggedIn={setLoggedIn}/> : <LoginBtn setLoggedIn={setLoggedIn}/>}
  //   </div>
  // )

  // if (isLoggedIn) {
  //   return <LogoutBtn setLoggedIn={setLoggedIn} />
  // } else {
  //   return <LoginBtn setLoggedIn={setLoggedIn} />
  // }
}

export default App
