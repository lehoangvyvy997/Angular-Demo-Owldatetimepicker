import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as _moment from 'moment';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_CUSTOM_FORMATS = {
    parseInput: 'LL LT',
    fullPickerInput: 'LL LT',
    datePickerInput: 'LL',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@Component({
    selector: 'app-custom-format-example',
    templateUrl: './custom-format.component.html',
    styleUrls: ['./custom-format.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // `MomentDateTimeAdapter` can be automatically provided by importing
        // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},

        {provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS},
    ],
})
export class CustomFormatComponent implements OnInit {

    public dateTime = new moment();

    constructor() {
    }

    ngOnInit() {
    }

}
