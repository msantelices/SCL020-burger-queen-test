import { db, collection, addDoc, Timestamp } from "./init.js";

export const createOrders = async (currentUser, tableName, order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      time: Timestamp.now(),
      user: currentUser,
      tableName,
      order,
      status: "pending",
    });
    // ;
    console.log(docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
