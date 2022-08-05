import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './characters/character/comics/comics.component';
import { SeriesComponent } from './characters/character/series/series.component';
import { HistoriasComponent } from './characters/character/historias/historias.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    FiltrosComponent,
    ComicsComponent,
    SeriesComponent,
    HistoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,    
    MatInputModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    InfiniteScrollModule,
    ScrollingModule,
    CdkAccordionModule,
    MatExpansionModule
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
