import {useState} from 'react'
import axios from 'axios'

const LoginForm =()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('')
    const handeleSubmit= async(e)=>{
        e.preventDefault();
        const authObject={'prject-id':'c15ed1aa-22a4-48b6-85fc-fd0b0418da37','User-Name':username,'User-Secret': password}
        try {
            await axios.get('http://api.chatengine.io/chat',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();  
        } catch (error) {
            setError ('ops try again')
        }
    }
    return(
        <div className="wrapper">
            <div className="login-form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handeleSubmit}>
                    <input  type="text" value={username} onChange={(e)=>setUsername(e.target.value)}className="input" placeholder="username" required/>
                    <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="input" placeholder="password" required/>
                    <div align ="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;