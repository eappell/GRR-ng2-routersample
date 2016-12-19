import { Component, Input } from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styles : ['./loading.component.css'],
    providers: [NgSwitch, NgSwitchCase]
})
export class LoadingComponent {
    @Input() loading: boolean;
    constructor() {}
}

export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}
