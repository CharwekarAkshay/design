import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CarouselModule} from 'primeng/carousel';
@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
    ]
})
export class PrimengModule { }
