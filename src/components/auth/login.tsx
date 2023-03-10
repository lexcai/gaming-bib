import { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import  Cookies  from 'universal-cookie'
import { UserContext } from '../../context/userContext';
import { auth } from '../../firebase-config';
// import { UserContext } from '../../context/userContext';
 
const Login = () => {
  const cookies = new Cookies()
  const { signIn, } = useContext(UserContext)
  const inputs = useRef<any[]>([])
  const [validation, setValidation] = useState('')

  let navigate = useNavigate()
  const formRef = useRef<any>()
  
  const addInputs = (el: never) => {
    if(el && !inputs.current.includes(el)) {
        inputs.current.push(el)
    }
  }
    const handleForm = async (e: any) => {
      e.preventDefault()
      console.log(inputs)
      try {
        const cred = await signIn(
          inputs.current[0].value,
          inputs.current[1].value
        ) 
        // à tester
        // formRef.current.reset();
          setValidation("")
          console.log(cred)
    const uid: string | undefined = auth.currentUser!.uid
        cookies.set("uid", uid, { path: "/" })
        console.log("UID :  ", uid)
        // console.log(cred)
        navigate("/dashboard/game")
      } catch {
        setValidation("Wopsy, email and/or password incorrect")
      }
    }

  document.title = "Gaming Library - Connexion";

  return (
    <>
      {/* {modalState.login && ( */}
      <div className="Login">
        <div className="Login__Description">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perferendis dolorum, dolores placeat corporis minus aliquid
            reiciendis quaerat quae sint perspiciatis aperiam quidem atque optio
            nam alias, maiores unde quis?
          </p>
        </div>
        <form className="Login__Form" ref={formRef}>
          <div className="mb-3">
            <input
              ref={addInputs}
              type="email"
              className="form-control"
              id="email"
              placeholder="Adresse Mail"
            />
          </div>
          <div className="mb-3">
            <input
              ref={addInputs}
              type="password"
              className="form-control"
              id="password"
              placeholder="Mot de passe"
            />
          </div>
          <p className="text-danger mt-1">{validation}</p>
          <button
            type="button"
            onClick={handleForm}
            className="btn btn-primary mb-3"
          >
            <span>Se connecter</span>
            <i className="bi bi-arrow-right bi-2x"></i>
          </button>
          <div className="Login__ForgotPassword">
            <p>Mot de passe oublié ?</p>
          </div>
        </form>
      </div>
      {/* )} */}
    </>
  )
};

export default Login;

