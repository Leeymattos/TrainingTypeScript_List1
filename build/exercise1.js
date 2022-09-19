"use strict";
class Client {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passowrd = password;
    }
    handleChangeEmail(email) {
        this.email = email;
    }
}
const user = new Client(1, 'weslley', 'weslley@gmail.com', '1234');
console.table(user);
