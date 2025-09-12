export class UserRegister {
    Id!: number;
    Name!: string;
    Email!: string;
    Phone!: string;
    Address!: string;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Email = '';
        this.Phone = '';
        this.Address = '';
    }
}