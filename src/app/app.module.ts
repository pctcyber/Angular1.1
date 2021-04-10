import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FootterComponent } from './footter/footter.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    FootterComponent,
    TrangChuComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
