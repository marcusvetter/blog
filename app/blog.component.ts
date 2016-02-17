import {Component} from 'angular2/core';
import {HeaderComponent} from "./header/header.component";

const TEMPLATE = require('./blog.jade');
const STYLE = require('./blog.scss');

@Component({
    selector: 'mv-blog',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [HeaderComponent]
})
export class BlogComponent {
}