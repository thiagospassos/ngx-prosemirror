import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { NgxProsemirrorModule } from './modules/ngx-prosemirror/ngx-prosemirror.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxProsemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
