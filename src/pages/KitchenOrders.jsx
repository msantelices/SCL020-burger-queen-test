import React, {useEffect} from 'react'
import { auth, collection, db, getDocs, onSnapshot } from "../firebase/init";

const KitchenOrders = ({ordersDb, setOrdersDb}) => {

    console.log('in kitchen', ordersDb)

    useEffect(() => {
        const pepito = getOrders();
      }, []);
    
      const getOrders = () => {
        onSnapshot(collection(db, "orders"), (snapshot) => {
          setOrdersDb(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
      };

    return (
        <div>
            <h2>Kitchen orders</h2>
            <h2>Kitchen orders</h2>
            <h2>Kitchen orders</h2>
            <h2>Kitchen orders</h2>
            <h2>Kitchen orders</h2>
            <h2>Kitchen orders</h2>
        </div>
    )
}

export default KitchenOrders