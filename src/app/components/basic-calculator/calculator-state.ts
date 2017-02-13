export interface ICalculatorState {
    history?: string[];
    currentExpression?: string;
    currentValue?: string;
    currentOperator?: string;
    decimalActive?: boolean;
    operatorActive?: boolean;
    currencyConversion?: string;
}
