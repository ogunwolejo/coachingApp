export interface ICurrentUser {
    status:boolean;
    data:IData;
    message:string;
}

interface IData {
    token:string;
    user: {
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
}