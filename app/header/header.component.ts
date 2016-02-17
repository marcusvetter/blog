import {Component} from 'angular2/core';

const TEMPLATE = require('./header.jade');

@Component({
    selector: 'mv-header',
    template: `${TEMPLATE}`
})
export class HeaderComponent {
}