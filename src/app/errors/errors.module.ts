import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error/error.component";
import {ErrorRoutingModule} from "./error-routing.module";



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  exports: [ErrorComponent]
})
export class ErrorsModule { }
