import { db, auth } from '../firebase'

db.collection('messages').doc('mJLaMn6MBPQ00n4DzCjU').get().then((message) => console.log(message.data()))
db.collection('messages').doc('algo').set({papa:124, arbejas: false})

export const sendMessage = async (message) => {
    await db.collection('messages').doc().set(message)
}