import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
  const history = useHistory();
    const[email,setEmail]= useState('');
    const[pass,setPass]= useState('');
    const[name,setName]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        if (!email || !pass || !name) {
          setErrorMessage('Please fill out all fields');
        } else {
          console.log('Signup successful');
          history.push('/home');
        }
    };
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}

    </form>
    </div>
  );
};

export default SignUp
