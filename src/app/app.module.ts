import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [AppComponent, NavBarComponent, PostComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  // providers: [PostService], // creates this service class instance only once, and can be reused in other components
  bootstrap: [AppComponent],
})
export class AppModule {}
