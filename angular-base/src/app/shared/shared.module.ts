import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorsInterceptor } from './interceptors/server-errors.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi: true
  }]
})
export class SharedModule { }
