export interface ICurrentUser {
    token?:string;
    user:IUser;
}

interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isPhoneNumberVerified: false;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number
}