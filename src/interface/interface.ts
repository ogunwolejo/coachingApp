export interface AuthCredentials {
    email: string;
    password: string;
}

export interface ResetPassword {
    email: string;
    actionCode: any,
    continueUrl: string;
    lang:string
}

export interface LocalStorageData {
    accessToken: string;
    expirationTime: Date;
    refreshToken: string;
    isExpired:boolean
}