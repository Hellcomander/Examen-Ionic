import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {Result} from '../app/result/result.component'


import {Datos} from '../app/Datos/Datos'

@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot()],
  declarations: [AppComponent, HelloComponent, Result],
  bootstrap: [AppComponent, ],
  providers: [
    {provide: ErrorHandler,},
    Datos
  ]
})
export class AppModule {}
