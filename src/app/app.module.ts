import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ActiveSprintReducer } from './share/store/activeSprint/activesprint.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MyEffects } from './share/store/activeSprint/activespint.effect'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({activeSprint: ActiveSprintReducer}),
    EffectsModule.forRoot([MyEffects]),
    StoreDevtoolsModule.instrument(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
