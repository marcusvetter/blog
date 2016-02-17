import {Component} from 'angular2/core';

const TEMPLATE = require('./content.jade');
const STYLE = require('./content.scss');

@Component({
    selector: 'mv-content',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class ContentComponent {
}