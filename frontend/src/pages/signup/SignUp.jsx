import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react";

function SignUp() {

  const [inputs, setinputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  function handleCheckboxChange(gender){
    setinputs({...inputs, gender})
  }
  return (
    <div>
      <h1>Sign Up <span>Chat App</span></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            <span>Full Name</span>
          </label>
          <input type="text" placeholder='Jhon Doe'
          value={inputs.fullName}
          onChange={(e) => setinputs({...inputs, fullName: e.target.value})} />
        </div>
        <div>
          <label htmlFor="">
            <span>Username</span>
          </label>
          <input type="text" placeholder='johndoe'
           value={inputs.username}
          onChange={(e) => setinputs({...inputs, username: e.target.value})} /> 
        </div>
        <div>
          <label htmlFor="">
            <span>Password</span>
          </label>
          <input type="password" placeholder='Enter Password' 
           value={inputs.password}
          onChange={(e) => setinputs({...inputs, password: e.target.value})} />
        </div>
        <div>
          <label htmlFor="">
            <span>Confirm Password</span>
          </label>
          <input type="password" placeholder='Confirm Password' 
           value={inputs.confirmPassword}
          onChange={(e) => setinputs({...inputs, confirmPassword: e.target.value})} />
        </div>
        <div>
          <Link to={'/login'} >Alredy have an account? </Link>
        </div>
        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectGender={inputs.gender} />
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp