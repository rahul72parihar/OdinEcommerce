import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

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
export { getAllProducts };
