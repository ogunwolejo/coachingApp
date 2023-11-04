import {createAsyncThunk} from "@reduxjs/toolkit";

interface ChangeUserEmail {
    id:string;
    email:string;
}

interface ChangeUserPassword {
    id:string;
    password:string;
}

interface ChangeAccountNotifications {
    id:string;
    billing:{
        email:boolean;
        phone:boolean;
    };

    notification: {
        email:boolean;
        phone:boolean;
    };

    completedProject:{
        phone:boolean;
        email:boolean;
    }
}

