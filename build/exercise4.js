"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
prompt_sync_1.default;
class Employee {
    constructor({ id, name, cpf, wage, address }) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.wage = wage;
        this.address = address;
    }
    handleIsWorking(option) {
        this.isWorking = option;
    }
}
const employee = new Employee({
    id: 123,
    name: 'weslley',
    cpf: '123.123.123-45',
    wage: 3500,
    address: 'rua da maravilha n123'
});
employee.handleIsWorking(true);
console.table(employee);
