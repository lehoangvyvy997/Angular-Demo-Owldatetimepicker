import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-start-view-example',
    templateUrl: './start-view.component.html',
    styleUrls: ['./start-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartViewComponent implements OnInit {

    public dateTime: Date;

    public startMoment = new Date(2019, 2, 3, 10, 30, 30);

    constructor() {
    }

    ngOnInit() {
    }

}
