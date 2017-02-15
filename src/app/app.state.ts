export interface IAppState {
    calculator: ICalculatorState,
    basicForm: FormState
}

export interface ICalculatorState {
    history?: string[];
    currentExpression?: string;
    currentValue?: string;
    currentOperator?: string;
    decimalActive?: boolean;
    operatorActive?: boolean;
    currencyConversion?: string;
}

export class FormState {
    firstName?: string;
    lastName?: string;
    address?: Address;

    constructor(data: FormState = {}) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.address = data.address || new Address();
    }
}

export class Address {
    street?: string;
    city?: string;
    country?: string;

    constructor(data: Address = {}) {
        this.street = data.street || "";
        this.city = data.city || "";
        this.country = data.country || "";
    }
}