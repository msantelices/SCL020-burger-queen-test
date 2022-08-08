import {
  db,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  arrayRemove,
  arrayUnion,
} from "./init.js";

export const createOrders = async (currentUser, tableName, order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      time: Date.now(),
      user: currentUser,
      tableName,
      order,
      completed: false,
    });
    // ;
    console.log(docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// export const getOrderss = async () => {
//   const querySelector = await query(
//     collection(db, "orders")
//     // where("id", "==", currentUser)
//   );
//   const ordersFirebase = await getDocs(querySelector);
//   console.log(ordersFirebase.docs[0].data());
//   return ordersFirebase.docs[0].data();
// };

// export const getOrders = () => {
//   const ordersCollection = collection(db, "orders");

//   getDocs(ordersCollection)
//     .then((response) => {
//       const orderArray = response.docs.map((doc) => {
//         return doc.data();
//       });
//       return orderArray;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

// export const getOrders = async () => {
//   onSnapshot(query(collection(db, "orders")), (doc) => {
//     // const orders = [];
//     doc.docs.forEach((order) => {
//       console.log("order en get orders", order.data());
//       orders.push({ data: order.data() });
//     });
//     console.log("orders luego del return", orders);
//     return orders;
//   });
// };

// export const interpPostProfile = async () => {
// 	const divProfilePost = document.querySelector('#containerPostPerfilUser');
// 	snapshotProfile((postProfile) => {
// 		divProfilePost.innerHTML = '';
// 		postProfile.forEach((doc) => {
// 			const post = doc.data();
// 			console.log(post.Autor);
// 			// console.log('Prueba Marianny', doc.id);
// 			const formHomePost
//         }

export const getOrders = async () => {
  const ordersCollection = await collection(db, "orders");

  await getDocs(ordersCollection)
    .then((response) => {
      const orderArray = response.docs.map((doc) => {
        console.log("data de firestore", doc.data());
        return doc.data();
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
