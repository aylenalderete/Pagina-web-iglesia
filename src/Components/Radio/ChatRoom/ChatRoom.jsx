import React, { useEffect, useState } from 'react'
import { db, auth } from '../../../firebase'


function ChatRoom() {
    const [mensaje, setmensaje] = useState({
            message: '',
            messages: []
        })
    
    const updateMessage = (e) => {
        setmensaje({...mensaje, message: e.target.value})
    }

    //Agregar un nuevo mensaje al estado
    const handleSubmit = (e) => {
        e.preventDefault()
        //Sacar hora y minutos
        let date = new Date();
        let time = date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
        })
        const newMessage = {
            text: mensaje.message,
            hour: time
        }
        sendMessage(newMessage)
    }

    const messagesList = mensaje.messages?.map((el) => (
        <div>
            <li>{el.text}</li>
            <p>{el.hour}</p>
        </div>
    ))


    //FIREBASE: traer todos los mensajes
    useEffect(() => {
        let unSubscription = db
        .collection('messages')
        .orderBy('hour')
        .onSnapshot((messages)=> {
            const messagesData = messages.docs.map((el)=>el.data())
            setmensaje({...mensaje, messages: messagesData})
        })       
        return () => unSubscription() 
    }, [])

    //FIREBASE: mandar mensaje
    const sendMessage = async (message) => {
        await db.collection('messages').doc().set(message)
    }


    return (
        <div>
             <div>
                <ol>
                    {messagesList}
                </ol>
            </div> 
            <form onSubmit={handleSubmit}>
                <input
                    value={mensaje.message}
                    onChange={updateMessage}
                >
                </input>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ChatRoom
