export class UserRegister {
    userId!: number;
    userName!: string;
    emailId!: string;
    password!: string;

    constructor() { 
        this.userId = 0;
        this.userName = '';
        this.emailId = '';
        this.password = '';
    }
}