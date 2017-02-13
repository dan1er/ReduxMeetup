import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {composeReducers} from '@angular-redux/form';
import {defaultFormReducer, provideReduxForms} from '@angular-redux/form/dist/source';
import {combineReducers} from 'redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import CalculatorEpics from './components/basic-calculator/calculator.epics';
import calculatorReducer from './components/basic-calculator/calculator.reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private ngRedux: NgRedux<any>,
                private devTools: DevToolsExtension,
                private calculatorEpics: CalculatorEpics) {
        this.configureStore();
    }

    private configureStore(): void {
        const rootReducer = composeReducers(
            defaultFormReducer(),
            combineReducers({
                calculator: calculatorReducer
            })
        );

        this.ngRedux.configureStore(
            rootReducer,
            {},
            [
                createEpicMiddleware(combineEpics(...this.calculatorEpics.epics))
            ],
            this.devTools.isEnabled() ? [this.devTools.enhancer()] : null
        );

        provideReduxForms(this.ngRedux);
    }
}
