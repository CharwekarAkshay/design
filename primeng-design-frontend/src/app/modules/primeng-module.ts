import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule,
        ProgressBarModule
    ]
})
export class PrimengModule { }
