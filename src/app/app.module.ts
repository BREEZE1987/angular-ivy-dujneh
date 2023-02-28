import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StickyDirectiveModule } from './sticky.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, StickyDirectiveModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
