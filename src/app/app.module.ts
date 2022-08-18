import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { EventComponent } from './components/event/event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventsComponent } from './components/events/events.component';
import { TestComponent } from './components/test/test.component';
import { InviteComponent } from './components/invite/invite.component';
import { FiltereventsComponent } from './components/filterevents/filterevents.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'filter', component: FiltereventsComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    EventComponent,
    EditEventComponent,
    EventsComponent,
    TestComponent,
    InviteComponent,
    FiltereventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
