import MessageForm from './MessageForm.js'
import MyMessage from './MyMessage.js'
import TheirMessage from './TheirMessage.js'
const ChatFeed=(props)=>{
const {chats, activeChat,userName,messages}=props;
const chat=chats&& chats[activeChat];
const renderReadReceipts = (message,isMymessage)=> {
    return chat.people.map((person,index)=>person.last_read===message.id(
        <div
        key ={`read_${index}`}
        className="read-receipts"
        style={{
            float:isMymessage?'right':'left',
            ackgroundImage:`url(${person?.person?.avatar})`
        }}
        />
    ))
}
const renderMessaes =()=> {
    const keys = Object.keys(messages);
    return keys.map((key,index)=>{
        const message = messages[key];
        const lastmessagekey = index === 0?null:keys[index-1];
        const isMymessage = userName === message.sender.userName;
        return(
            <div key={`msg_${index}`}style={{width:'100'}}>
                <div className="message-block">
                    {
                        isMymessage
                        ? <MyMessage message={message}/>
                        :<TheirMessage message={message}lastmessage={messages[lastmessagekey]}/>
                    }
                </div>
                <div className="read-receips" style={{marginRight:isMymessage?'18px' :'0px', marginLeft:isMymessage?'0px' :'68px'}}>
                    {renderReadReceipts(message,isMymessage)}
                </div>
            </div>
        );
    })
}
if (!chat) return 'loading...';
return(
<div>
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat?.title} </div>
            <div className="chat-subtitle">
                {chat.people.map((person)=>`${person.person.userName}` )}
                </div>         
        </div>
    </div>
    {renderMessaes()}
    <div style={{height:'100px'}}/>
    <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat}/>
    </div>
</div>
);
}
export default ChatFeed;