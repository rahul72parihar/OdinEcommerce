// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
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
const bannerCollectionRef = collection(db, "banner");
const recentCollectionRef = collection(db, "recent");

async function getAllProducts() {
  const querySnapshot = await getDocs(productsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
async function getAllBanner() {
  const querySnapshot = await getDocs(bannerCollectionRef);
  const bannerArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return bannerArr;
}
async function getAllRecent() {
  const querySnapshot = await getDocs(recentCollectionRef);
  const bannerArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return bannerArr;
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
//Shopping Cart DATA GET
async function getShoppingCart(uid: any) {
  const shoppingCartCollectionRef = doc(db, "user", uid);
  let data;
  try {
    const docSnap = await getDoc(shoppingCartCollectionRef);
    if (docSnap.exists()) {
      data = docSnap.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}
const setShoppingCart = async (
  uid: any,
  title: any,
  image: any,
  price: any
) => {
  await setDoc(doc(db, "user", uid), {
    cart: [{ title: title, image: image, price: price, quantity: 1 }],
  });
};
const addShoppingCartItem = async (cart: any, index: number, uid: any) => {
  cart[index].quantity = cart[index].quantity + 1;
  await setDoc(doc(db, "user", uid), {
    cart: cart,
  });
};
const addNewItem = async (
  cart: any,
  uid: any,
  title: any,
  image: any,
  price: any
) => {
  cart.push({ title: title, image: image, price: price, quantity: 1 });
  await setDoc(doc(db, "user", uid), {
    cart: cart,
  });
};
const addProduct = async (uid: any, title: any, image: any, price: any) => {
  const shoppingCart: any = await getShoppingCart(uid);
  if (!shoppingCart || shoppingCart.length === 0) {
    setShoppingCart(uid, title, image, price);
    return;
  }
  const isPresent = shoppingCart.cart.find((curr: any) => curr.title === title);
  const cart = shoppingCart.cart;
  if (isPresent) {
    const index = cart.indexOf(isPresent);
    addShoppingCartItem(cart, index, uid);
  } else {
    addNewItem(cart, uid, title, image, price);
  }
  // if(isPresent){updateProduct()}
  // addNewProduct(uid, title, image, price);
};

//DELETE
const deleteShoppingCartItem = async (cart: any, index: number, uid: any) => {
  cart[index].quantity = cart[index].quantity - 1;
  if (cart[index].quantity === 0) cart.splice(index, 1);
  await setDoc(doc(db, "user", uid), {
    cart: cart,
  });
};
const deleteProduct = async (uid: any, title: any) => {
  const shoppingCart: any = await getShoppingCart(uid);
  const isPresent = shoppingCart.cart.find((curr: any) => curr.title === title);
  const cart = shoppingCart.cart;
  const index = cart.indexOf(isPresent);
  deleteShoppingCartItem(cart, index, uid);
};

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export {
  getAllProducts,
  getOneProduct,
  getAllBanner,
  getAllRecent,
  addProduct,
  getShoppingCart,
  deleteProduct,
};
