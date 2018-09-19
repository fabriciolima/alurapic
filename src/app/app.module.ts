import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routerModuleConfigurado} from './app.routes'



import { AppComponent } from './app.component';
import { FotoComponent } from './components/foto/foto.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from '../bootstrap/components/card/card.component';
import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { CardFotoComponent } from './components/card-foto/card-foto.component';

import {BootstrapModule} from '../bootstrap/bootstrap.module';
import { FiltroBuscaPipe } from './pipes/filtro-busca.pipe';
import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    TresPontinhosPipe,
    CardFotoComponent,
    FiltroBuscaPipe,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModule,
    routerModuleConfigurado,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
