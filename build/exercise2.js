"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Airplane {
    constructor({ brand, model, name, serialNumber, capacity }) {
        this.brand = brand;
        this.model = model;
        this.name = name;
        this.serialNumber = serialNumber;
        this.capacity = capacity;
    }
    isInFlight(option) {
        this.flying = option;
    }
}
const brand = prompt('Qual é a marca do avião? ');
const model = prompt('Qual o modelo do avião? ');
const name = prompt('Qual é o nome do avião? ');
const serialNumber = prompt('Qual é o numero de série do avião? ');
const capacity = Number(prompt('Qual é a capacidade de passageiros desse avião? '));
const option = (prompt('O avião precisa de reparo? '));
const airplane = new Airplane({
    brand,
    model,
    name,
    serialNumber,
    capacity
});
airplane.isInFlight(option);
console.table(airplane);
