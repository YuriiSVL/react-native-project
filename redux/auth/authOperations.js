import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authRegister =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: login });

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
export const authLogIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
        })
      );
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

export const authLogOut = () => async (dispatch, getState) => {
  dispatch(authSlice.actions.logout());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    const auth = getAuth();
    if (user) {
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
        })
      );
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};
