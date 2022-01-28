import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "@firebase/auth";
import { app } from "./config";

const auth = getAuth(app);

const register = async (email, password, setSubmitting) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    // console.log(auth.currentUser);
    onAuthStateChanged(auth, (userr) => {
      console.log(userr);
    });
    setSubmitting(false);
  } catch (error) {
    alert("Error", error.message);
    setSubmitting(false);
  }
};

const logout = async () => {
  await signOut();
};

const login = async (email, password, setSubmitting) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    // console.log(auth.currentUser);
    onAuthStateChanged(auth, (userr) => {
      console.log(userr);
      setSubmitting(false);
    });
  } catch (error) {
    prompt("Error", error.message);
    setSubmitting(false);
  }
};

const continueWithGoogle = () => {
  let provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(email, credential, errorMessage, errorCode);
    });
};

const continueWithMeta = (req, res) => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(user);

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      alert(email, credential, errorMessage, errorCode);

      // ...
    });
};
export { auth, login, register, logout, continueWithGoogle, continueWithMeta };
