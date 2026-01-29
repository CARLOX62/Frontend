const LoginBtn = ({ setLoggedIn }) => {
  return (
    <button onClick={() => setLoggedIn(true)}>
      Login
    </button>
  )
}

export default LoginBtn
