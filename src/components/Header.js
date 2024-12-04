import React from "react";
import {auth} from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    //use of this function  is to check authentication and setting up the store.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, or user sign up for first time
        const { uid, email, displayName, photoURL } = user;
        
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); // storing user info inside store
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unmounting component - unsubscribing onAuthStateChanged function called when unmount
    return () => unsubscribe();

  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      { user &&(
      <div className="flex p-2">
        <img
          className="h-12 w-12 m-2"
          src={user?.photoURL}
          alt="user-icon"
        />
        <button onClick={handleSignOut} className=" text-white font-bold  ">
          Sign Out
        </button>
      </div>
)}
    </div>
  );
};

export default Header;
