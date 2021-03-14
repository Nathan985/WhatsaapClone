import {createContext, useState} from 'react';

export const ChatContext = createContext({});

export function ChatProvider({children}){
    const [activeChat,setActiveChat] = useState(false);

    function setStatusChat(status){
        setActiveChat(status);
    }

    return(
        <ChatContext.Provider value={{
            activeChat,
            setActiveChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}