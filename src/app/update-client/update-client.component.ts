import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import {client}from '../model/client.model';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: ``
})
export class UpdateClientComponent {
  cc = new client();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private clientService : ClientService
  ){}
  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.cc = this.clientService.consulterclient(this.activatedRoute.snapshot. params['id']);
    console.log(this.cc);
    } 
updateclient()
{ //console.log(this.currentProduitcc)
this.clientService.updateclient(this.cc);
this.router.navigate(['clients']);
}

}
