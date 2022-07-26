import React from "react";
import { auth, onAuthStateChanged  } from "./firebase/init";
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Admin from "./components/Admin";
import Login from "./components/Login";
import Navbar from './components/Navbar'



function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

//--Para validar que el usuario este registrado cuando se carga la pagina
  React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    });
  },[])

  //---Se valida si el usuario es el curren user, muestra las rutas, de lo contrario muestra que esta cargando la pag
  return firebaseUser !== false ? (
    <Router>
    <div className="container">
      <Navbar firebaseUser={firebaseUser} />
      <Switch>
      <Route path="/" exact>
        inicio...
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      </Switch>
    </div>
    </Router>
  ) : (<p>Cargando...</p>)
}

export default App;
