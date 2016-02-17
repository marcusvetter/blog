import {Component} from 'angular2/core';

const TEMPLATE = require('./header.jade');
const STYLE = require('./header.scss');

@Component({
    selector: 'mv-header',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class HeaderComponent {
}