/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

import { LoginController  } from './login';

@Component({
    selector: 'hackfridaynight-app',
    injectables: []})
@View({
    templateUrl: 'hackfridaynight.html',
    directives: [LoginController]
})
class HackfridaynightApp {
    constructor() {

    }
}
bootstrap(HackfridaynightApp);