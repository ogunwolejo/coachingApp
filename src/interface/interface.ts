export interface AuthCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface ResetPassword {
  email: string
  actionCode: any
  continueUrl: string
  lang: string
}

export interface LocalStorageData {
  accessToken: string
  expirationTime: Date
  refreshToken: string
  isExpired: boolean
}

export interface ProfileData {
  id:string;
  fullName:string;
  avatar:string;
  phoneContact:null | string;
  email:string;
  emailVerified:boolean;
  role:string
}


export interface AccountData {
  loading:boolean,
  error:any,
  loginCredentials :{
    email:string;
    password:string
  };
  notifications: {
    notification: {
      email:boolean;
      phone:boolean;
    };
    completedProject:{
      email:boolean;
      phone:boolean;
    };
    billing:{
      email:boolean;
      phone:boolean;
    };
  }
}

export interface ProfileUpdate {
  id:string;
  //role:string;
  country:string;
  phoneNumber:string;
  fullName:string;

}