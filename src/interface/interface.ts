export interface AuthCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
  interest:string
}

export interface LoginCredentials {
  email?: string
  password?: string
  phoneNumber?: string

}

export interface ResetPassword {
  email: string
}

export interface LocalStorageData {
  accessToken: string
  expirationTime: Date
  refreshToken: string
  isExpired: boolean
}

export interface ProfileData {
  id:string;
  firstName:string;
  lastName:string;
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
  firstName:string;
  lastName:string;

}