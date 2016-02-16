import {Component} from 'angular2/core';
import {HeaderComponent} from "./header/header.component";

@Component({
    selector: 'mv-blog',
    template: `
        <mv-header></mv-header>
        <div>Some content here...</div>
    `,
    directives: [HeaderComponent]
})
export class BlogComponent {
    constructor() {

    }
}