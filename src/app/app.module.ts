import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    

  ],
  providers: [ 
  
  {//modificación de config x defecto de AN Mat
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
          appearance: 'outline'
              }
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
