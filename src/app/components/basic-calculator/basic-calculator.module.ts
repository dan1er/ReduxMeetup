import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from './calculator/calculator.component';
import CalculatorActions from './calculator.actions';
import CalculatorEpics from './calculator.epics';
import CalculatorService from './calculator.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        CalculatorActions,
        CalculatorEpics,
        CalculatorService
    ],
    declarations: [CalculatorComponent],
    exports: [CalculatorComponent]
})
export default class BasicCalculatorModule {
}
