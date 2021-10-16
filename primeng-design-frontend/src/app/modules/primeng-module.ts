import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
    ]
})
export class PrimengModule { }
