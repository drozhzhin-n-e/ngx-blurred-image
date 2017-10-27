import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlurredImageComponent } from './blurred-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BlurredImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    BlurredImageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
