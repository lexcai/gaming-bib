import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const config = {
  apiKey: 'AIzaSyBNoerhzqpqWEDIN5zE5UmoBqU_mZUBxqc',
  authDomain: 'gaming-bib.firebaseapp.com',
  projectId: 'gaming-bib',
  storageBucket: 'gaming-bib.appspot.com',
  messagingSenderId: '59905086508',
  appId: '1:59905086508:web:4ce2aad6abc1a113e32d89'
}

export const app = initializeApp(config)
export const auth = getAuth(app)
export const db = getFirestore(app)
// export const clientRef = db.collection('client')
