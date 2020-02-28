import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-restriction-example',
    templateUrl: './restriction.component.html',
    styleUrls: ['./restriction.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestrictionComponent implements OnInit {

    public dateTime1: Date;

    public dateTime2: Date;

    public startAt = new Date(2018, 3, 18, 10, 30);

    // Min moment: April 12 2018, 10:30
    public min = new Date(2018, 3, 12, 10, 30);

    // Max moment: April 25 2018, 20:30
    public max = new Date(2018, 3, 25, 20, 30);

    public myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
