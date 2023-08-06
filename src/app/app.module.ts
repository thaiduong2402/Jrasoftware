import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ActiveSprintReducer } from './share/store/activeSprint/activesprint.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ActiveSprintEffects } from './share/store/activeSprint/activespint.effect'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackLogReducer } from './share/store/backlog/backlog.reducer';
import { BackLogMyEffects } from './share/store/backlog/backlog.effect';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({activeSprint: ActiveSprintReducer, backlog : BackLogReducer}),
    EffectsModule.forRoot([ActiveSprintEffects, BackLogMyEffects]),
    StoreDevtoolsModule.instrument(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
