import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
        ChipModule,
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule,
        InputSwitchModule,
        CarouselModule,
        ChipModule,
    ]
})
export class PrimengModule { }
