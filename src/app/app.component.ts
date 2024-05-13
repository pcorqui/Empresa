import { Component, OnInit, Injectable } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Empresa';

  constructor(private emp :EmpleadoService){

  }

  infoEmpleado : Empleado[] = [{
    numEmpleado : "",
    nombre: "",
    apellidos: "",
    role: ""
  }];

  ngOnInit(): void {

      this.emp.getEmpleado()
        .subscribe(
          data => {
            this.infoEmpleado = data
            console.log(data);
          }
        );
      
  }

}
