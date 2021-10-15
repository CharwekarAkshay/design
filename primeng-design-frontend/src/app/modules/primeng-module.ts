import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        MenuModule,
        ButtonModule,
    ],
    exports: [
        MenuModule,
        ButtonModule,
    ]
})
export class PrimengModule { }
