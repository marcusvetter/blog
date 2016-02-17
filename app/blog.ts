import {Component} from 'angular2/core';
import {HeaderComponent} from "./header/header.ts";
import {ContentComponent} from "./content/content";

const TEMPLATE = require('./blog.jade');
const STYLE = require('./blog.scss');

@Component({
    selector: 'mv-blog',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [HeaderComponent, ContentComponent]
})
export class BlogComponent {
}