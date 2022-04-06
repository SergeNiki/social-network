import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./Content.module.css";
// import DialogsContainer from "./Dialogs/DialogsContainer";
// import Login from "./Login/Login";
// import ProfileContainer from "./Profile/ProfileContainer";
// import Signup from "./Signup/Signup";
// import UsersConteiner from "./Users/UsersConteiner";
const ProfileContainer = React.lazy(() => import("./Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Login = React.lazy(() => import("./Login/Login"));
const Signup = React.lazy(() => import("./Signup/Signup"));

const Content = () => {
  // debugger;
  return (
    <main className={classes.content}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<Navigate to={"/profile"} replace />} /> */}
        </Routes>
      </Suspense>
    </main>
  );
};

export default Content;
