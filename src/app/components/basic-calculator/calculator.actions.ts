import {Injectable} from '@angular/core';

@Injectable()
export default class CalculatorActions {
    public static readonly CLEAR_BOARD = "CLEAR_BOARD";
    public static readonly CLEAR_CURRENT = "CLEAR_EXPRESSION";
    public static readonly REMOVE_CHARACTER = "REMOVE_CHARACTER";
    public static readonly ENTER_NUMBER = "ENTER_NUMBER";
    public static readonly ENTER_OPERATOR = "ENTER_ADDITION";
    public static readonly ENTER_DECIMAL = "ENTER_DECIMAL";
    public static readonly CALCULATE_EXPRESSION = "CALCULATE_EXPRESSION";
    public static readonly NEGATE = "NEGATE";
    public static readonly CONVERT_CURRENCY = "CONVERT_CURRENCY";
    public static readonly CURRENCY_CONVERTED = "CURRENCY_CONVERTED";
    public static readonly CURRENCY_CONVERSION_ERROR = "CURRENCY_CONVERSION_ERROR";

    public clearBoard = () => ({ type: CalculatorActions.CLEAR_BOARD });
    public clearCurrent = () => ({ type: CalculatorActions.CLEAR_CURRENT });
    public removeCharacter = () => ({ type: CalculatorActions.REMOVE_CHARACTER });
    public enterNumber = (payload: number) => ({ type: CalculatorActions.ENTER_NUMBER, payload });
    public enterOperator = (payload: string) => ({ type: CalculatorActions.ENTER_OPERATOR, payload });
    public enterDecimal = () => ({ type: CalculatorActions.ENTER_DECIMAL });
    public calculateExpression = () => ({ type: CalculatorActions.CALCULATE_EXPRESSION });
    public negate = () => ({ type: CalculatorActions.NEGATE });
    public convertCurrency = (payload: string) => ({ type: CalculatorActions.CONVERT_CURRENCY, payload });
    public currencyConverted = (payload: any) => ({ type: CalculatorActions.CURRENCY_CONVERTED, payload });
    public currencyConversionError = () => ({ type: CalculatorActions.CURRENCY_CONVERSION_ERROR });
}