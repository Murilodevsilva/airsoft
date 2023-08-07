import * as firebaseAuth from 'firebase/auth';
import { auth } from '../FirebaseConfig';
export default class AuthService {
  login(email, password) {
    return firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        return user;
      })
      .catch(() => {});
  }

  recoverPassword(email) {
    return firebaseAuth.sendPasswordResetEmail(auth, email);
  }
}
