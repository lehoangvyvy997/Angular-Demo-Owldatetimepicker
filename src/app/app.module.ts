import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { RangeComponent } from './range/range.component';
import { StartViewComponent } from './start-view/start-view.component';
import { ValidationComponent } from './validation/validation.component';
import { RestrictionComponent } from './restriction/restriction.component';
import { LocalizationComponent } from './localization/localization.component';
import { MomentJsComponent } from './moment-js/moment-js.component';
import { CustomFormatComponent } from './custom-format/custom-format.component';
import { YearMonthComponent } from './year-month/year-month.component';
import {ReaciveComponent } from './reacive/reacive.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// ahii
@NgModule({
    declarations: [
        AppComponent,
        BasicComponent,
        StandAloneComponent,
        RangeComponent,
        StartViewComponent,
        ValidationComponent,
        RestrictionComponent,
        LocalizationComponent,
        MomentJsComponent,
        CustomFormatComponent,
        YearMonthComponent,
        ReaciveComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,

        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
