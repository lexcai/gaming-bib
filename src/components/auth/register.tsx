import { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const Register = () => {
  const { signUp } = useContext(UserContext)
  const [validation, setValidation] = useState("")
  const inputs = useRef<any[]>([])
  const addInputs = (el: HTMLInputElement) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }
  const formRef = useRef<any>()
  let navigate = useNavigate()

  const handleform = async (e: any) => {
    e.preventDefault()

    if (inputs.current[1].value.length < 6 || inputs.current[2].value.length < 6) {
      setValidation("6 charactères minimum.")
      return
    }
    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe de sont pas pareil.")
      return
    }
    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset()
      setValidation('')
      navigate("/auth/login")
    } catch (err: any) {
      if(err.code === "auth/invalid-email") {
        setValidation("Format Email invalide")
      }
      if(err.code === "auth/email-already-in-use") {
        setValidation("Email déja utilisé")
      }
    }
  }


  document.title = "Gaming Library - Inscription"

  return (
    <div className="Register">
      <div className="Register__Description">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          perferendis dolorum, dolores placeat corporis minus aliquid reiciendis
          quaerat quae sint perspiciatis aperiam quidem atque optio nam alias,
          maiores unde quis?
        </p>
      </div>
      <form ref={formRef} onSubmit={handleform} className="Register__Form">
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
            placeholder="Nouveau mot de passe"
          />
        </div>
        <div className="mb-3">
          <input
            ref={addInputs}
            type="password"
            className="form-control"
            id="repassword"
            placeholder="Retapez votre nouveau mot de passe"
          />
          <p className="text-danger mt-1">{validation}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          <span>S'inscrire</span>
          <i className="bi bi-arrow-right bi-2x"></i>
        </button>
      </form>
    </div>
  )
};

export default Register;
