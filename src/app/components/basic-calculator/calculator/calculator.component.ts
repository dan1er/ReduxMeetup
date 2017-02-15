import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import CalculatorActions from '../calculator.actions';
import {Observable} from 'rxjs';
import {IAppState} from '../../../app.state';

interface ICalculatorButton {
    text: string,
    action: string,
    value?: number|string;
}

interface ICurrency {
    name: string,
    symbol: string
}

@Component({
    selector: 'redux-calculator',
    template: `
        <div class="calculator-container container">
            <div class="display-box">
                <span *ngIf="(currencyConversion$|async)">{{currencyConversion$|async}}</span>
                {{currentExpression$|async}}{{currentValue$|async}}
            </div>
            <ul>
                <li *ngFor="let button of buttons">
                    <button (click)="onButtonClicked(button)">
                        {{button.text}}
                    </button>
                </li>
            </ul>
            <ul class="calculator-converter">
                <li *ngFor="let currency of currencies">
                    <button (click)="getCurrencyConversion(currency.name)">
                        {{currency.name}} ({{currency.symbol}})
                    </button>
                </li>
            </ul>
        </div>
        
        <div class="calculator-history">
            <ul>
                <li *ngFor="let item of history$|async">{{item}}</li>
            </ul>
        </div>
  `,
    styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent {
    @select(["calculator", "currentValue"]) public readonly currentValue$: Observable<number>;
    @select(["calculator", "currentExpression"]) public readonly currentExpression$: Observable<number>;
    @select(["calculator", "currencyConversion"]) public readonly currencyConversion$: Observable<number>;
    @select(["calculator", "history"]) public readonly history$: Observable<number>;

    public buttons: ICalculatorButton[];
    public currencies: ICurrency[];

    constructor(private _ngRedux: NgRedux<IAppState>,
                private _calculatorActions: CalculatorActions) {
        this.setCalculatorButtons();
        this.setCurrencies();
    }

    public onButtonClicked(button: ICalculatorButton): void {
        this._ngRedux.dispatch(this._calculatorActions[button.action](button.value));
    }

    public getCurrencyConversion(currencyName: string): void {
        this._ngRedux.dispatch(this._calculatorActions.convertCurrency(currencyName));
    }

    private setCalculatorButtons(): void {
        this.buttons = [
            {
                text: "C",
                action: "clearBoard"
            },
            {
                text: "CE",
                action: "clearCurrent"
            },
            {
                text: "Back",
                action: "removeCharacter"
            },
            {
                text: "÷",
                action: "enterOperator",
                value: "/"
            },
            {
                text: "7",
                action: "enterNumber",
                value: 7
            },
            {
                text: "8",
                action: "enterNumber",
                value: 8
            },
            {
                text: "9",
                action: "enterNumber",
                value: 9
            },
            {
                text: "×",
                action: "enterOperator",
                value: "*"
            },
            {
                text: "4",
                action: "enterNumber",
                value: 4
            },
            {
                text: "5",
                action: "enterNumber",
                value: 5
            },
            {
                text: "6",
                action: "enterNumber",
                value: 6
            },
            {
                text: "-",
                action: "enterOperator",
                value: "-"
            },
            {
                text: "1",
                action: "enterNumber",
                value: 1
            },
            {
                text: "2",
                action: "enterNumber",
                value: 2
            },
            {
                text: "3",
                action: "enterNumber",
                value: 3
            },
            {
                text: "+",
                action: "enterOperator",
                value: "+"
            },
            {
                text: "±",
                action: "negate"
            },
            {
                text: "0",
                action: "enterNumber",
                value: 0
            },
            {
                text: ".",
                action: "enterDecimal"
            },
            {
                text: "=",
                action: "calculateExpression"
            }
        ];
    }

    private setCurrencies(): void {
        this.currencies = [{
            name: "EUR",
            symbol: "€"
        }, {
            name: "CUP",
            symbol: "₱"
        }, {
            name: "GBP",
            symbol: "£"
        }, {
            name: "UYU",
            symbol: "$U"
        }];
    }
}
