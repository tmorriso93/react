import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom"; 

const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email= e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{

const res = await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(

  (error) => {
    setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
          displayName,
          photoURL: downloadURL,
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      })

      await setDoc(doc(db, "userChats", res.user.uid), {})
      navigate("/")

    });
  }
);

  }catch(err){
    setErr(true)
    }
  }
    
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Live Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password: at least 6 characters'/>
                <input style={{display: "none"}} type="file" id='file'/>
                <label htmlFor="file">
                      <img  src="https://imgs.search.brave.com/27Lkjxn_mixLkMaPCfcH6E5JC5lNQuow2ik9Mw5iOTg/rs:fit:256:256:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9w/YXBpcnVzLXRlYW0v/cGFwaXJ1cy1zdGF0/dXMvMjU2L2F2YXRh/ci1kZWZhdWx0LWlj/b24ucG5n" alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? <Link to="/register">Login</Link></p>
        </div>
    </div>
  )
}

export default Register