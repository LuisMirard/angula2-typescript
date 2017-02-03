import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms/src/directives';
import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule]
    delarations: [AppComponent]
    boostrap: [AppComponent]
})
  
export class AppModule{}