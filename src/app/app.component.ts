import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { composeReducers } from '@angular-redux/form';
import { defaultFormReducer, provideReduxForms } from '@angular-redux/form/dist/source';
import { combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import CalculatorEpics from './components/basic-calculator/calculator.epics';
import calculatorReducer from './components/basic-calculator/calculator.reducers';
import { routerReducer, NgReduxRouter } from '@angular-redux/router';
import reduxFormReducer from './components/redux-form/redux-form.reducers';
import ReduxFormEpics from './components/redux-form/redux-form.epics';
import { loggerMiddleware } from "./middlewares/logger.middelware";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(
        private _ngRedux: NgRedux<any>,
        private _ngReduxRouter: NgReduxRouter,
        private _devTools: DevToolsExtension,
        private _calculatorEpics: CalculatorEpics,
        private _reduxFormEpics: ReduxFormEpics) {
        this.configureStore();
    }

    private configureStore(): void {
        const rootReducer = composeReducers(
            defaultFormReducer(),
            combineReducers({
                calculator: calculatorReducer,
                router: routerReducer,
                basicForm: reduxFormReducer
            })
        );

        this._ngRedux.configureStore(
            rootReducer,
            {},
            [
                createEpicMiddleware(combineEpics(
                    ...this._calculatorEpics.epics,
                    ...this._reduxFormEpics.epics
                )),
                loggerMiddleware
            ],
            this._devTools.isEnabled() ? [this._devTools.enhancer()] : null
        );

        this._ngReduxRouter.initialize();

        provideReduxForms(this._ngRedux);
    }
}
