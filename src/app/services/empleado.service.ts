import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  public getEmpleado(){
    return this.http.get<Empleado[]>("http://localhost:8080/personas/empleados");
  }

}
