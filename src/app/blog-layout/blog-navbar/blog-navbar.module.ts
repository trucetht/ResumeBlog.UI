import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from 'src/app/app.component';
import { TabViewModule } from "primeng/tabview";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MenubarModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    TabViewModule
  ]
})
export class BlogNavbarModule { }
