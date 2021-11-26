import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';

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
    ProgressSpinnerModule,
    SelectButtonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    TooltipModule,
    PasswordModule,
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
    ProgressSpinnerModule,
    SelectButtonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    TooltipModule,
    PasswordModule,
  ],
})
export class PrimengModule {}
