import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';

// here is the default text string
export class FrenchIntl extends OwlDateTimeIntl {
    /** A label for the up second button (used by screen readers).  */
    upSecondLabel = 'ajouter une seconde';

    /** A label for the down second button (used by screen readers).  */
    downSecondLabel = 'moins une seconde';

    /** A label for the up minute button (used by screen readers).  */
    upMinuteLabel = 'ajouter une minute';

    /** A label for the down minute button (used by screen readers).  */
    downMinuteLabel = 'moins une minute';

    /** A label for the up hour button (used by screen readers).  */
    upHourLabel = 'ajouter une heure';

    /** A label for the down hour button (used by screen readers).  */
    downHourLabel = 'moins une heure';

    /** A label for the previous month button (used by screen readers). */
    prevMonthLabel = 'le mois précédent';

    /** A label for the next month button (used by screen readers). */
    nextMonthLabel = 'le mois prochain';

    /** A label for the previous year button (used by screen readers). */
    prevYearLabel = 'année précédente';

    /** A label for the next year button (used by screen readers). */
    nextYearLabel = 'l\'année prochaine';

    /** A label for the previous multi-year button (used by screen readers). */
    prevMultiYearLabel = 'Previous 21 years';

    /** A label for the next multi-year button (used by screen readers). */
    nextMultiYearLabel = 'Next 21 years';

    /** A label for the 'switch to month view' button (used by screen readers). */
    switchToMonthViewLabel = 'Change to month view';

    /** A label for the 'switch to year view' button (used by screen readers). */
    switchToMultiYearViewLabel = 'Choose month and year';

    /** A label for the cancel button */
    cancelBtnLabel = 'Annuler';

    /** A label for the set button */
    setBtnLabel = 'Confirmer';

    /** A label for the range 'from' in picker info */
    rangeFromLabel = 'From';

    /** A label for the range 'to' in picker info */
    rangeToLabel = 'To';

    /** A label for the hour12 button (AM) */
    hour12AMLabel = 'AM';

    /** A label for the hour12 button (PM) */
    hour12PMLabel = 'PM';
}

@Component({
    selector: 'app-localization-example',
    templateUrl: './localization.component.html',
    styleUrls: ['./localization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'},
        {provide: DateTimeAdapter, useClass: NativeDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
        {provide: OwlDateTimeIntl, useClass: FrenchIntl},
    ],
})
export class LocalizationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
