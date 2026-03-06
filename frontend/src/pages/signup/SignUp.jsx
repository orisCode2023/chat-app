import GenderCheckbox from "./GenderCheckbox"

function SignUp() {
  return (
    <div>
      <h1>Sign Up <span>Chat App</span></h1>
      <form action="">
        <div>
          <label htmlFor="">
            <span>Full Name</span>
          </label>
          <input type="text" placeholder='Jhon Doe' />
        </div>
        <div>
          <label htmlFor="">
            <span>Username</span>
          </label>
          <input type="text" placeholder='johndoe' />
        </div>
        <div>
          <label htmlFor="">
            <span>Password</span>
          </label>
          <input type="password" placeholder='Enter Password' />
        </div>
        <div>
          <label htmlFor="">
            <span>Confirm Password</span>
          </label>
          <input type="password" placeholder='Confirm Password' />
        </div>
        <div>
        <a href="#">Alredy have an account? </a>
        </div>
        <GenderCheckbox />
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp