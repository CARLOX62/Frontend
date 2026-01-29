const LogoutBtn = ({ setLoggedIn }) => {
  return (
    <button onClick={() => setLoggedIn(false)}>
      Logout
    </button>
  )
}

export default LogoutBtn
