import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
    DateTimeAdapter,
    OWL_DATE_TIME_FORMATS,
    OWL_DATE_TIME_LOCALE,
    OwlDateTimeComponent,
    OwlDateTimeFormats
} from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_MOMENT_DATE_TIME_FORMATS: OwlDateTimeFormats = {
    parseInput: 'MM/YYYY',
    fullPickerInput: 'l LT',
    datePickerInput: 'MM/YYYY',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@Component({
    selector: 'app-year-month-example',
    templateUrl: './year-month.component.html',
    styleUrls: ['./year-month.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
        // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},

        {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS},
    ],
})
export class YearMonthComponent implements OnInit {

    public dateTime = new FormControl(moment());

    constructor() {
    }

    ngOnInit() {
    }

    chosenYearHandler( normalizedYear: Moment ) {
        const ctrlValue = this.dateTime.value;
        ctrlValue.year(normalizedYear.year());
        this.dateTime.setValue(ctrlValue);
    }

    chosenMonthHandler( normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment> ) {
        const ctrlValue = this.dateTime.value;
        ctrlValue.month(normalizedMonth.month());
        this.dateTime.setValue(ctrlValue);
        datepicker.close();
    }

}
