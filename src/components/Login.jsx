import React from 'react'
import { auth, createUserWithEmailAndPassword, db, addDoc, collection, signInWithEmailAndPassword } from '../firebase/init'
import { withRouter } from 'react-router-dom'



const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError ] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(false)

    const procesarDatos = e =>{
        e.preventDefault()
        if(!email.trim()){
            // console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }
        if(!pass.trim()){
            // console.log('Ingrese Password')
            setError('Ingrese Password')
            return
        }
        if(pass.length<6){
            // console.log('Password debe ser mayor a 6 carácteres')
            setError('Password debe ser mayor a 6 carácteres')
            return
        }
        setError(null)
        console.log('Pasando todas las validaciones')

        if(esRegistro){
            registrar()
        }else{
            login()
        }
}

//----Para logear al usuario----
const login = React.useCallback(async()=>{
try {
    const response = await signInWithEmailAndPassword(auth, email, pass)
    console.log(response.user)
    
   setEmail('')
   setPass('')
   setError(null)
   props.history.push('/admin')

} catch (error) {
    console.log(error)
    if(error.code === 'auth/invalid-email'){
        setError('Verifica tus datos')
    }
    if(error.code === 'auth/wrong-password'){
        setError('Verifica tus datos')
    }
    if(error.code === 'auth/user-not-found'){
        setError('Correo no registrado')
    }
}
},[email, pass, props.history])

//----Para crear usuario----
const registrar = React.useCallback(async()=>{
try {
   const response = await createUserWithEmailAndPassword(auth, email,pass)
   await addDoc(collection(db, 'user'), {
    email:response.user.email,
    uid: response.user.uid,
  });

    // await db.collection('usuarios').doc(response.user.email).set({
    //     email:response.user.email,
    //     uid:response.user.uid
    // })
   console.log (response.user)
   setEmail('')
   setPass('')
   setError(null)
   props.history.push('/admin')

} catch (error) {
    console.log(error.message)
    if(error.code === 'auth/invalid-email'){
        setError('Email no valido')
    }
    if(error.code==='auth/email-already-in-use'){
        setError('Email ya utilizado')
    }
    
}
},[email, pass, props.history])


  return (
    <div className='mt-5'>
        <h3 className="text-center">
            {
                esRegistro ? 'Registro de usuario' : 'Login de acceso'
            }
        </h3>
        <hr/>
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form onSubmit={procesarDatos}>
                    {
                        error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )
                    }
                  <input 
                  type="email"
                  className='form-control mb-2'
                  placeholder='Ingrese un email'
                  onChange={e => setEmail(e.target.value)} 
                  value={email}
                  /> 
                  <input 
                  type="password"
                  className='form-control mb-2'
                  placeholder='Ingrese password' 
                  onChange={e => setPass(e.target.value)} 
                  value={pass}
                  /> 
                  <button className="btn btn-dark btn-lg w-100 mb-2" type='submit'>
                    {
                        esRegistro ? 'Registrarse' : 'Acceder'
                    }
                    </button>
                  <button type='button' className="btn btn-info btn-sm w-100"
                  onClick={()=>setEsRegistro(!esRegistro)} >
                    {
                    esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?' 
                    }
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
   
}

export default withRouter(Login)