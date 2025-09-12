export class UserRegister {
    Id!: number;
    Name!: string;
    email!: string;
    Phone!: string;
    Address!: string;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.email = '';
        this.Phone = '';
        this.Address = '';
    }
}