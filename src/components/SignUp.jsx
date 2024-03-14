import React,{useState} from 'react'

const SignUp = (props) => {
    const[email,setEmail]= useState('');
    const[pass,setPass]= useState('');
    const[name,setName]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='auth-form-container'>
        <h2 >Sign Up</h2> <br/>

    <form className="signup" onSubmit={handleSubmit} >
        <label htmlFor="nam">Full Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="nam" id="nam" placeholder='Full Name'/>
        <label htmlFor="email"> Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email"/>
        <label htmlFor="pw">Password</label> 
        <input value={pass} onChange={(e)=> setPass(e.target.value)}type="password" placeholder="********" id="pw" name="pw"/>

        <button className="link-btn"onClick={()=>props.onFormSwitch('login')}>Sign Up</button>
    </form>
    </div>
  )
}

export default SignUp
