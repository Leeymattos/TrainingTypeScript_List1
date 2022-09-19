class Client {
    public id: number;
    public name: string;
    public email: string;
    private passowrd: string;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passowrd = password;
    }

    public handleChangeEmail(email: string) {
        this.email = email;
    }

}

const user: Client = new Client(1, 'weslley', 'weslley@gmail.com', '1234');

console.table(user);




