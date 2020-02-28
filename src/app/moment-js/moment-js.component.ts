import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as _moment from 'moment';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_FORMATS } from 'ng-pick-datetime-moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
    selector: 'app-moment-js-example',
    templateUrl: './moment-js.component.html',
    styleUrls: ['./moment-js.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
        // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
        {provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS},
    ],
})
export class MomentJsComponent implements OnInit {

    public dateTime = new moment();

    constructor() {
    }

    ngOnInit() {
    }

}
