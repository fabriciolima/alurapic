import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoComponent } from './components/foto/foto.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from '../bootstrap/components/card/card.component';
import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { CardFotoComponent } from './components/card-foto/card-foto.component';

import {BootstrapModule} from '../bootstrap/bootstrap.module'
@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    TresPontinhosPipe,
    CardFotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
