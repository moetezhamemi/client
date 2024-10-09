import { Component } from '@angular/core';
import { client } from '../model/client.model';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newclient = new client();
  constructor(private clientService : ClientService) { }
  addclient(){
    //console.log(this.newclient);
    this.clientService.ajouterclient(this.newclient);
  }
}
