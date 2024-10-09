import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';  // Assurez-vous que AddClientComponent est bien importé
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent  // Ajoutez AddClientComponent ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
