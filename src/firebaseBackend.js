// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,

  collection,
  getDocs,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCMGoVEcmIGAatMZ1T_XmRjoifmkEhWRA",
  authDomain: "where-s-waldo-fc0ec.firebaseapp.com",
  projectId: "where-s-waldo-fc0ec",
  storageBucket: "where-s-waldo-fc0ec.appspot.com",
  messagingSenderId: "126071751532",
  appId: "1:126071751532:web:0beaa93fbfd36181e7e949",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getHero(name) {
  const docRef = doc(db, "heros", name);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return;
  }
}

async function getLeaderboard() {
  // get sorted list of leaderboard entries
  // put the in an array and return
  const leaderboardArray = [];
  const taskCollectionRef = collection(db, "leaderboard");
  const taskCollectionSnapshot = await getDocs(
    query(taskCollectionRef, orderBy("time"), limit(10))
  );
  taskCollectionSnapshot.forEach((element) => {
    leaderboardArray.push(element.data());
  });
  return leaderboardArray;
}

async function writeNewScore(name, time) {
  try {
    const docRef = await addDoc(collection(db, "leaderboard"), {
      name,
      time,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("writeNewScore error: " + e);
  }
}

export { getHero, getLeaderboard, writeNewScore, app };
