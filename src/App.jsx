import {useState, useEffect} from "react";
import { auth, onAuthStateChanged } from "./firebase/init";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Navbar from './components/Navbar'
import WelcomeChef from "./pages/WelcomeChef";
import MakeOrder from "./pages/MakeOrder";
import WelcomeWaiter from "./pages/WelcomeWaiter";
import KitchenOrders from "./pages/KitchenOrders";
import MenuView from "./pages/MenuView";
import PrivateRoutes from "./components/PrivateRoutes";
import Orders from "./components/Orders";



function App() {

  const [firebaseUser, setFirebaseUser] = useState(false)

  const [orders, setOrders] = useState([])
  const [tableRegister, setTableRegister] = useState([])

  //--Para validar que el usuario este registrado cuando se carga la pagina
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    });
  }, [])

  //---Se valida si el usuario es el curren user, muestra las rutas, de lo contrario muestra que esta cargando la pag
  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
            {/* <Route path="/" exact>
        inicio...
      </Route> */}
      <PrivateRoutes>
          <Route path="/welcomechef">
            <WelcomeChef />
          </Route>
          <Route path="/makeorder">
            <MakeOrder setTableRegister={setTableRegister}/>
          </Route>
          <Route path="/welcomewaiter">
            <WelcomeWaiter />
          </Route>
          <Route path="/inkitchen">
            <KitchenOrders />
          </Route>
          <Route path="/menu">
            <MenuView setOrders={setOrders} tableRegister={tableRegister} />
          </Route>
          <Route path="/orders">
            <Orders orders={orders} tableRegister={tableRegister}/>
          </Route>
          </PrivateRoutes>
        </Switch>
      </div>
    </Router>
  ) : (<p>Cargando...</p>)
}

export default App;
