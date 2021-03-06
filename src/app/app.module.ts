import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.component';
import { ContextMenuModule } from './components/context-menu/context-menu.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { HttpClientModule } from '@angular/common/http';
import {PersonalRecordsModule} from './components/personal-records/personal-records.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ContextMenuModule,
    HttpClientModule,
    PersonalRecordsModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({ app: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
