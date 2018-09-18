import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoComponent } from './components/foto/foto.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './components/card/card.component';
import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { CardFotoComponent } from './components/card-foto/card-foto.component';
@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    CardComponent,
    TresPontinhosPipe,
    CardFotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
