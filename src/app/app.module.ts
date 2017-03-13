import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TablaResultadosService } from './tabla-resultados.service';


import { AppComponent } from './app.component';
import { TablaResultadosComponent } from './tabla-resultados/tabla-resultados.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'tabla-resultados',
    pathMatch: 'full'
  },
  {
    path: 'tabla-resultados',
    component: TablaResultadosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TablaResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [TablaResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
