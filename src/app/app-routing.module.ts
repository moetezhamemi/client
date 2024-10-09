import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
const routes: Routes = [{path: "clients", component : ClientsComponent},
  {path: "add-client", component :AddClientComponent},
  {path : "", redirectTo:"clients", pathMatch:"full"},
  {path: "updateclient/:id", component: UpdateClientComponent}

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
