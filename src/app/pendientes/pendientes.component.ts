import { Component, OnInit } from '@angular/core';
import { PendienteServiceService } from '../pendiente-service.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit  {

  constructor(public rest:PendienteServiceService) { }

  pendingAdd: string;
  pendingEdit: string;
  idPending: string;
  date: string;
  pendings;

  resetData(){
    this.pendingAdd = '';
    this.pendingEdit = '';
    this.idPending = '';
  }

  ngOnInit(): void {
    this.getPendings();
  }
  getPendings() {
    this.pendings = [];
    this.rest.getPendings().subscribe((data: {}) => {
      this.pendings = data;
    });
  }


    remove(id) {
      this.idPending = this.pendings[id].idPendiente;
      this.rest.deletePending(this.idPending).subscribe((result) => {
        this.getPendings();
        this.resetData();
      }, (err) => {
        console.log(err);
      });
    }

    edit(id){
      this.idPending = this.pendings[id].idPendiente;
      this.pendingEdit = this.pendings[id].pendiente;
      this.date = this.pendings[id].fechapendiente;
    }

    addPending() {

      const pendingObj = {
        "pendiente": this.pendingAdd
      };

      this.rest.addPending(pendingObj).subscribe((result) => {
        this.getPendings();
        this.resetData();
      }, (err) => {
        console.log(err);
      });
    }

    update(){
      const pendingObj = {
        "idpendiente":this.idPending,
        "pendiente": this.pendingEdit
      };
      this.rest.updatePending(pendingObj).subscribe((result) => {
        this.getPendings();
        this.resetData();
      }, (err) => {
        console.log(err);
      });
    }

}
