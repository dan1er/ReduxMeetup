import {IAction} from '../../core/action';
import {ICalculatorState} from './calculator-state';
import CalculatorActions from './calculator.actions';

const defaultState: ICalculatorState = { currentValue: "0", history: [], currentExpression: "" };

export default function calculatorReducer(state: ICalculatorState = defaultState,
                                          action: IAction) {
    switch (action.type) {
        case CalculatorActions.CLEAR_BOARD:
            return Object.assign({}, state, {
                currentValue: "0",
                currentExpression: "",
                currencyConversion: "",
                decimalActive: false,
                operatorActive: false
            });
        case CalculatorActions.CLEAR_CURRENT:
            return Object.assign({}, state, {
                currentValue: "0",
                currencyConversion: "",
                decimalActive: false,
                operatorActive: false
            });
        case CalculatorActions.NEGATE:
            return Object.assign({}, state, { currentValue: +state.currentValue * -1 });
        case CalculatorActions.ENTER_NUMBER:
            return Object.assign({}, state, {
                currentValue: state.currentExpression || state.currentValue !== "0"
                    ? `${state.currentValue}${action.payload}`
                    : action.payload,
                decimalActive: false,
                currencyConversion: "",
                operatorActive: false
            });
        case CalculatorActions.ENTER_DECIMAL:
            return parseInt(String(state.currentValue)) === +state.currentValue
                ? Object.assign({}, state, { currentValue: `${+state.currentValue}.`, decimalActive: true })
                : state;
        case CalculatorActions.ENTER_OPERATOR:
            let currentExpression = !state.operatorActive || !state.currentExpression
                ? state.currentExpression
                : state.currentExpression.substr(0, state.currentExpression.length - 3);

            return Object.assign({}, state, {
                currentOperator: action.payload,
                currentValue: "",
                operatorActive: true,
                currencyConversion: "",
                currentExpression: `${currentExpression}${state.currentValue} ${action.payload} `
            });
        case CalculatorActions.CALCULATE_EXPRESSION:
            let expression = `${state.currentExpression}${state.currentValue}`,
                calculatedValue = eval(expression).toFixed(2);

            return Object.assign({}, state, {
                currentOperator: "",
                currentValue: calculatedValue,
                operatorActive: false,
                decimalActive: false,
                currentExpression: "",
                currencyConversion: "",
                history: [...state.history, `${expression} = ${calculatedValue}`]
            });
        case CalculatorActions.CURRENCY_CONVERTED:
            return Object.assign({}, state,
                {
                    currencyConversion: `${(+state.currentValue * action.payload.value).toFixed(2)} ${action.payload.currency}`
                });
        case CalculatorActions.REMOVE_CHARACTER:
        default:
            return state;
    }
}