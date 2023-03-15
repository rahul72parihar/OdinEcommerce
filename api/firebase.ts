import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyA-yi3884uMF-T82Vq3TM1hnTeC4zl4BxA",
  authDomain: "ecommerceodin.firebaseapp.com",
  projectId: "ecommerceodin",
  storageBucket: "ecommerceodin.appspot.com",
  messagingSenderId: "388718595094",
  appId: "1:388718595094:web:26fbf7dac6fe040923f937",
  measurementId: "G-96SL1K1DFE",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const productsCollectionRef = collection(db, "products");

async function getAllProducts() {
  const querySnapshot = await getDocs(productsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
async function getOneProduct(title: string | undefined) {
  const q = query(productsCollectionRef, where("title", "==", title));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return data;
}

export { getAllProducts, getOneProduct };
