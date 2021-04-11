import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
// import { HeaderComponent } from './header/header.component';
// import { ContentComponent } from './content/content.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { FootterComponent } from './footter/footter.component';
// import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LayoutModuleModule } from './layout-module/layout-module.module';
import { OneWayBindingComponent } from './Module/DataBinding/one-way-binding/one-way-binding.component';
import { OneWayBindingModule } from './Module/DataBinding/one-way-binding/one-way-binding.module';

@NgModule({
  declarations: [
    AppComponent,
    // OneWayBindingComponent,
    // FirstComponent,
    // HeaderComponent,
    // ContentComponent,
    // SideBarComponent,
    // FootterComponent,
    // TrangChuComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModuleModule,
    OneWayBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
