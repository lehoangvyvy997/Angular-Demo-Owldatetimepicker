import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-stand-alone-example',
    templateUrl: './stand-alone.component.html',
    styleUrls: ['./stand-alone.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandAloneComponent implements OnInit {

    public dateTime1: Date;

    public dateTime2: Date;

    public dateTime3: Date;

    constructor() {
    }

    ngOnInit() {
    }

}
