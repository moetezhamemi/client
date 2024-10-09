import { Injectable } from '@angular/core';
import { client } from '../model/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients : client[];
  client! : client
  constructor() {
    this.clients = [
      { idclient : 4, nomclient : "tez", emailclient : "aaaeee@gmail.com", dateinscription: new Date("01/14/2011"), adresseclient : "25,ruetezz"},
      { idclient : 2, nomclient : "ali", emailclient : "aaazz@gmail.com", dateinscription: new Date("01/14/2015"), adresseclient : "25,rueali"},
      { idclient : 3, nomclient : "salah", emailclient : "aaabbb@gmail.com", dateinscription: new Date("01/16/2020"), adresseclient : "25,ruesalah"}
    ];
   }
   listeclients():client[]{
    return this.clients;
   }
   ajouterclient(client : client){
    this.clients.push(client);
   }
   supprimerclient(cli: client){
    //supprimer le produit prod du tableau produits
    const index = this.clients.indexOf(cli, 0);
    if (index > -1) {
    this.clients.splice(index, 1);
    }
    //ou Bien
    /* this.clients.forEach((cur, index) => {
    if(cli.idclient === cur.idclient) {
    this.clients.splice(index, 1);
    }
    }); */
    }
    consulterclient(id:number): client{
      this.client = this.clients.find(p => p.idclient == id)!;
      return this.client;
      }
      trierclients() {
        this.clients = this.clients.sort((n1, n2) => {
          if (n1.idclient! > n2.idclient!) {
            return 1;
          }
          if (n1.idclient! < n2.idclient!) {
            return -1;
          }
          return 0;
        });
      }
    updateclient(c:client)
    {
    // console.log(c);
    this.supprimerclient(c);
    this.ajouterclient(c);
    this.trierclients();
    }
    
}
