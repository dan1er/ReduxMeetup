import {Routes} from '../../../node_modules/@angular/router/src/config';
import {RouterModule} from '../../../node_modules/@angular/router/src/router_module';
import {CalculatorComponent} from '../components/basic-calculator/calculator/calculator.component';
import {SimpleFormComponent} from '../components/redux-form/simple-form/simple-form.component';

const routes: Routes = [
    { path: "", redirectTo: "/calculator", pathMatch: "full" },
    { path: "calculator", component: CalculatorComponent },
    { path: "redux-form", component: SimpleFormComponent },
    { path: "**", redirectTo: "calculator" }
];

export const routing = RouterModule.forRoot(routes);