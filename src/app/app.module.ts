import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainArticleComponent } from './components/main-article/main-article.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { MinCardComponent } from './components/min-card/min-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClickHeaderComponent } from './components/click-header/click-header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MainArticleComponent,
    CardContainerComponent,
    MinCardComponent,
    FooterComponent,
    ClickHeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
