/// <reference path="./typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';


import {HTTP_BINDINGS} from 'http/http';

import {Friendship} from './friendship';

import { LoginController  } from './login';


@Component({
    selector: 'hackfridaynight-app',
    injectables: [],
    viewBindings: [HTTP_BINDINGS]
})
@View({
    templateUrl: 'hackfridaynight.html',
    directives: [LoginController, Friendship]

})
class HackfridaynightApp {
    constructor() {

    }
}
bootstrap(HackfridaynightApp);