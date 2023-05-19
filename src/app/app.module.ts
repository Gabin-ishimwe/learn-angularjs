import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav.component';
import { SidecarComponent } from './sidecar/sidecar.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, SidecarComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
