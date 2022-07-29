import React from 'react'
import { auth } from '../firebase/init'
import { withRouter } from 'react-router-dom'

const Admin = ({history}) => {

    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if (auth.currentUser) {
            console.log('Existe un usuario')
            setUser(auth.currentUser)
        } else {
            console.log('No existe un usuario')
            history.push('/login')
        }
    }, [history])

    return (
        <div>
            <h2>Ruta protegida</h2>
            {
                user && (
                    <h3>{user.email}</h3>
                )
            }
        </div>
    )
}

export default withRouter(Admin)