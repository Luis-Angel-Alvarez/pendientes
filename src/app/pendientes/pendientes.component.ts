import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent  {

  pendingAdd: string = '';
  pendingEdit: string;
  idPending: string;
  date: string;

  editField: string;
    personList: Array<any> = [
      { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
      { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
      { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
    ];

    remove(id: any) {
      this.personList.splice(id, 1);
    }

    edit(id){
      console.log("ID--->"+id);

      console.log("El registro es",this.personList[id]);
      this.idPending = this.personList[id].id;
      this.pendingEdit = this.personList[id].name;
      this.date = this.personList[id].country;
    }

    save(){
      console.log("DATA---->",this.pendingAdd);
    }

    update(){
      console.log("SI EDITA",this.pendingEdit);
    }

}
