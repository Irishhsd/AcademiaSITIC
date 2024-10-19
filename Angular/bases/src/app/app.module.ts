import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Componentes
    CounterModule,
    ArticuloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
