import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-range-example',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeComponent implements OnInit {

    public dateTimeRange: Date[];

    constructor() {
    }

    public ngOnInit() {
    }

}
