import { Injectable } from '@angular/core';
import { client } from '../model/client.model';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients : client[];
  client! : client;
  types : Type[];
  constructor() {
    this.types = [ {idtype : 1, nomtype : "VIP"},
      {idtype : 2, nomtype : "Normal"}]; 
      this.clients = [
        { idclient : 1, nomclient : "tez", emailclient : "jjj@gmail.com",
        dateinscription : new Date("01/10/2011"),adresseclient : "daar", type : {idtype : 1, nomtype : "Premium"}},
        { idclient : 2, nomclient : "ali", emailclient : "kkk@gmail.com",
          dateinscription : new Date("01/8/2011"),adresseclient : "dar", type : {idtype : 2, nomtype : "Normal"}},
          { idclient : 3, nomclient : "salah", emailclient : "lll@gmail.com",
            dateinscription : new Date("01/12/2011"),adresseclient : "maison", type : {idtype : 3, nomtype : "Normal"}},
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
    listetype(): Type[] {
      return this.types;
      }
      consultertype(id:number): Type{
        return this.types.find(cat => cat.idtype == id)!;
        }
      
      
    
}
