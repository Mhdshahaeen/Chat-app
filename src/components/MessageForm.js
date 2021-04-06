import {useState} from 'react'
import {sendMessage,isTyping}from 'react-chat-engine'
import {SendOutlined ,PictureOutlined }from '@ant-design/icons'
const MessageForm =(props)=>{
    const [value,setValue]=useState('')
    const {chatId,creds}=props;
    const handeleSubmit = (e)=>{
        e.preventDefalult();
        const text =value.trim();
        if(text.length>0)sendMessage(creds,chatId,{text});
        setValue('');
    }
    const handeleChange = (e)=>{
        setValue (e.target.value);
        isTyping(props,chatId);
    }
    const handeleUpload = (e)=>{
        sendMessage(creds,chatId,{files:e.target.files,test:''})
    }

    return(
        <form className="messege-form" onSubmit={handeleSubmit}>
            <input
             className="message-input"
             placeholder="Send a message..."
             value={value}
             onChange={handeleChange}
             onSubmit={handeleSubmit}
            />
            <label htmlFor="upload-image">
                <span className="image-button">
                    <PictureOutlined className="pic-icon"/>
                </span>
            </label>
            <input 
            type="file"
            multiple={false}
            id="upload-button"
            style={{display:'none'}}
            onChange={handeleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    );
}
export default MessageForm;