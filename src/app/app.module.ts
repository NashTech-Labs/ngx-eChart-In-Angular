import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
  ],

  providers: [ {
    provide: NGX_ECHARTS_CONFIG,
    useFactory: () => ({ echarts: () => import('echarts') })
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
