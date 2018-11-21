import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProsemirrorComponent } from './ngx-prosemirror/ngx-prosemirror.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxProsemirrorComponent
  ],
  exports: [
    NgxProsemirrorComponent
  ]
})
export class NgxProsemirrorModule { }
