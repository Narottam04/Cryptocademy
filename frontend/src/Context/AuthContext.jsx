import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";

import { auth } from "../Utils/init-firebase";
import Loader from "../Components/Loader";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";

// create a context with a placeholder value initially
const AuthContext = createContext();

// custom hook
export const useAuth = () => useContext(AuthContext);

// Provider that wraps our app.js
export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [profileSVG, setProfileSVG] = useState(null);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function deleteUser(user) {
    return deleteUser(user);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "https://cryptocademy.netlify.app/"
    });
  }

  function updateProfileName(username) {
    return updateProfile(auth.currentUser, {
      displayName: username
    });
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setAuthLoading(false);
        const avatar = createAvatar(funEmoji, {
          seed: user.displayName,
          eyes: ["closed", "cute", "glasses", "shades", "stars", "wink", "wink2"],
          mouth: ["wideSmile", "cute", "lilSmile", "smileTeeth"],
          backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "f6d594", "ffd5dc", "ffdfbf"]
        });
        setProfileSVG(avatar.toString());
      } else {
        setCurrentUser(null);
        setAuthLoading(false);
        const avatar = createAvatar(funEmoji, {
          seed: "defaultUser",
          eyes: ["closed", "cute", "glasses", "shades", "stars", "wink", "wink2"],
          mouth: ["wideSmile", "cute", "lilSmile", "smileTeeth"],
          backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "f6d594", "ffd5dc", "ffdfbf"]
          // ... other options
        });
        setProfileSVG(avatar.toString());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    updateProfileName,
    deleteUser,
    profileSVG
  };

  if (authLoading === true) {
    return <Loader message="Checking if you logged in before...." />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
