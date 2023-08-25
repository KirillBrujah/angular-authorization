import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter/counter.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

/// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/// My Components
import { AuthInterceptor } from './http-itnerceptors/auth-inteceptor';
import {
  CarouselComponent,
  ChevronLeftComponent,
  ChevronRightComponent,
  CustomButtonComponent,
  HomeComponent,
  LoadingComponent,
  LogoutButtonComponent,
  LogoutIconComponent,
  MyCounterComponent,
  NavbarComponent,
  ProgressComponent,
  SlideComponent
} from './ui/components';
import {
  LoginComponent,
  MainComponent,
  PageNotFoundComponent
} from './ui/pages';

/// Swiper
import { register } from 'swiper/element';


register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    LoadingComponent,
    MyCounterComponent,
    CustomButtonComponent,
    CarouselComponent,
    ChevronRightComponent,
    ChevronLeftComponent,
    SlideComponent,
    ProgressComponent,
    MainComponent,
    NavbarComponent,
    LogoutIconComponent,
    LogoutButtonComponent,
  ],
  imports: [
    StoreModule.forRoot({ count: counterReducer }, {}),
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    /// Material
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
