import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PanelComponent } from './panel/panel.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routing } from './app.routes';
import { PreviewComponent } from './cadastro/preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ListagemComponent,
    CadastroComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
