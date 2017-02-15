import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import CalculatorActions from './calculator.actions';
import {IAction} from '../../core/action';
import {NgRedux} from '@angular-redux/store';
import {Observable} from 'rxjs';
import CalculatorService from './calculator.service';
import {Response} from '@angular/http';
import {ICalculatorState, IAppState} from '../../app.state';

@Injectable()
export default class CalculatorEpics {
    epics: Epic<Action, IAppState>[];

    constructor(private _calculatorActions: CalculatorActions,
                private _calculatorService: CalculatorService) {
        this.epics = [this.convertCurrency];
    }

    convertCurrency = (action$: any, store: NgRedux<IAppState>) => action$
        .ofType(CalculatorActions.CONVERT_CURRENCY)
        .debounceTime(100)
        .mergeMap((action: IAction) => this._calculatorService.getCurrenciesConversion()
            .map((response: Response) => this._calculatorActions.currencyConverted({
                currency: action.payload,
                value: response.json().quotes[`USD${action.payload}`]
            }))
            .catch(() => Observable.throw(this._calculatorActions.currencyConversionError())));
}