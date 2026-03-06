function Login() {
  return (
    <div>
      <h1>Login <span>Chat App</span></h1>
      <form action="">
        <div>
          <label htmlFor="">
            <span>Username</span>
          </label>
          <input type="text" placeholder='Enter Username' />
        </div>
        <div>
          <label htmlFor="">
            <span>Password</span>
          </label>
          <input type="password" placeholder='Enter Password' />
        </div>
        <a href="#">Don't have an account? </a>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login