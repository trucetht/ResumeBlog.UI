import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogNavbarComponent } from './blog-layout/blog-navbar/blog-navbar.component';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    BlogNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
