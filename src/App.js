import {ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.js'
import './App.css';
import LoginForm from './components/LoginForm.js'
const App =()=> {
    if(!localStorage.getItem('userName'))return <LoginForm/>
    return(
        <ChatEngine
		height='100vh'	
        projectID='c15ed1aa-22a4-48b6-85fc-fd0b0418da37'
		userName={localStorage.getItem('username')}
		userSecret={localStorage.getItem('password')}
        RenderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App ;