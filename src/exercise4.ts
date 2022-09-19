import PromptSync from "prompt-sync";

PromptSync


interface newEmployee {
    id: number;
    name: string;
    cpf: string;
    wage: number;
    address: string;
}


class Employee {
    private id: number;
    private name: string;
    private cpf: string;
    private wage: number;
    private address: string;
    private isWorking: boolean;



    constructor({ id, name, cpf, wage, address }: newEmployee) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.wage = wage;
        this.address = address;
    }

    public handleIsWorking(option: boolean) {
        this.isWorking = option;
    }

}


const employee: Employee = new Employee({
    id: 123,
    name: 'weslley',
    cpf: '123.123.123-45',
    wage: 3500,
    address: 'rua da maravilha n123'
})

employee.handleIsWorking(true);

console.table(employee);