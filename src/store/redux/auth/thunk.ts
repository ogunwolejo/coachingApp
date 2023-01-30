import {createAsyncThunk} from '@reduxjs/toolkit'
import {firebaseApp} from '../../../firebase.config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  updateEmail,
  updatePassword,
} from 'firebase/auth'
import {cacheAuthHandler} from '../../../app/util/caching.auth'
import {AuthCredentials, LoginCredentials, ResetPassword} from '../../../interface/interface'
import {getFirestore, collection, addDoc, setDoc, doc} from 'firebase/firestore'
import {ROLES} from '../../../interface/enum'

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginCredentials, {rejectWithValue}) => {
    try {
      const {email, password} = credentials
      const auth = getAuth(firebaseApp)

      const isUserLogin = await signInWithEmailAndPassword(auth, email, password)
      return JSON.stringify(isUserLogin.user)
    } catch (error: any) {
      console.log(error.code)
      return rejectWithValue(error.code)
    }
  }
)

export const registerUserThunk = createAsyncThunk(
  'auth/signupUser',
  async (credentials: AuthCredentials, {rejectWithValue}) => {
    try {
      const {email, password} = credentials
      const auth = getAuth(firebaseApp)
      const db = getFirestore(firebaseApp)

      const registerUser = await createUserWithEmailAndPassword(auth, email, password)
      if (registerUser && auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: `${credentials.firstName} ${credentials.lastName}`,
        })
        await updateEmail(auth.currentUser, credentials.email)
        await updatePassword(auth.currentUser, credentials.password)
        //@ts-ignore
        await sendEmailVerification(auth.currentUser)

        await setDoc(doc(db, 'user', registerUser.user.uid), {
          emailVerified: registerUser.user.emailVerified,
          role:ROLES.CLIENT
        })
      }

      throw Error('Could not register user, try again')
    } catch (error: any) {
      return rejectWithValue(error.code)
    }
  }
)

export const googleAuthProviderHandlerThunk = createAsyncThunk(
  '/googleAuth',
  async (data: any, {rejectWithValue}) => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(firebaseApp)
      const db = getFirestore(firebaseApp)

      const result = await signInWithPopup(auth, provider)

      const credential = GoogleAuthProvider.credentialFromResult(result)
      //const token = credential?.accessToken // google token to get more info from the google API

      //@ts-ignore
      cacheAuthHandler(result.user?.stsTokenManager)
      if (result.user) {
        await setDoc(doc(db, 'user', result.user.uid), {
              emailVerified: result.user.emailVerified,
              role:ROLES.CLIENT
        })

        return JSON.stringify(result.user)
      }
    } catch (error: any) {
      return rejectWithValue(error.code)
    }
  }
)


export const adminGoogleAuthProviderHandlerThunk = createAsyncThunk(
    '/adminGoogleAuth',
    async (data: any, {rejectWithValue}) => {
      try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(firebaseApp)
        const db = getFirestore(firebaseApp)

        const result = await signInWithPopup(auth, provider)

        const credential = GoogleAuthProvider.credentialFromResult(result)
        //const token = credential?.accessToken // google token to get more info from the google API

        //@ts-ignore
        cacheAuthHandler(result.user?.stsTokenManager)

        if (result.user) {
          console.log(ROLES.HEADCOACH)
          await setDoc(doc(db, 'user', result.user.uid), {
            emailVerified: result.user.emailVerified,
            role:ROLES.HEADCOACH
          })

          return JSON.stringify(result.user)
        }
      } catch (error: any) {
        return rejectWithValue(error.code)
      }
    }
)

export const employeeGoogleAuthProviderHandlerThunk = createAsyncThunk(
    '/employeeGoogleAuth',
    async (data: any, {rejectWithValue}) => {
      try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(firebaseApp)
        const db = getFirestore(firebaseApp)

        const result = await signInWithPopup(auth, provider)

        const credential = GoogleAuthProvider.credentialFromResult(result)
        //const token = credential?.accessToken // google token to get more info from the google API

        //@ts-ignore
        cacheAuthHandler(result.user?.stsTokenManager)

        if (result.user) {
          await setDoc(doc(db, 'user', result.user.uid), {
            emailVerified: result.user.emailVerified,
            role:ROLES.COACH
          })

          return JSON.stringify(result.user)
        }
      } catch (error: any) {
        return rejectWithValue(error.code)
      }
    }
)




