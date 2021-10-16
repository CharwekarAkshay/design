import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
        ChipModule,
        RippleModule,
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
        ChipModule,
        RippleModule,
    ]
})
export class PrimengModule { }
