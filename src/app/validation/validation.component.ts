import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-validation-example',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationComponent implements OnInit {


    // Min moment: April 12 2018, 10:30
    public min = new Date(2018, 3, 12, 10, 30);

    // Max moment: April 25 2018, 20:30
    public max = new Date(2018, 3, 25, 20, 30);

    public invalidDateTime1 = new Date(2018, 3, 26, 20, 30);

    public invalidDateTime2 = new Date(2018, 3, 22, 20, 30);

    public invalidDateTime3 = 'Invalid Date Time Value';

    public invalidDateTime4 = [new Date(2018, 3, 22, 20, 30), new Date(2018, 3, 12, 20, 30)];

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
