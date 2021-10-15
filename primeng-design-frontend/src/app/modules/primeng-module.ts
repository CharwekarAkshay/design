import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
        CardModule
    ],
    exports: [
        MenuModule,
        ButtonModule,
        CardModule
    ]
})
export class PrimengModule { }
