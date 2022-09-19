import PromptSync from "prompt-sync";

const prompt = PromptSync();

interface BuildAirplane {
    brand: string,
    model: string,
    name: string,
    serialNumber: string,
    capacity: number
}

class Airplane {
    private brand: string;
    private model: string;
    private name: string;
    private serialNumber: string;
    private capacity: number;
    private flying: string;

    constructor({ brand, model, name, serialNumber, capacity }: BuildAirplane) {
        this.brand = brand;
        this.model = model;
        this.name = name;
        this.serialNumber = serialNumber;
        this.capacity = capacity;
    }

    public isInFlight(option: string) {
        this.flying = option;
    }
}

const brand = prompt('Qual é a marca do avião? ')
const model = prompt('Qual o modelo do avião? ')
const name = prompt('Qual é o nome do avião? ')
const serialNumber = prompt('Qual é o numero de série do avião? ')
const capacity = Number(prompt('Qual é a capacidade de passageiros desse avião? '))
const option = (prompt('O avião precisa de reparo? '))

const airplane: Airplane = new Airplane({
    brand,
    model,
    name,
    serialNumber,
    capacity
})

airplane.isInFlight(option)

console.table(airplane)