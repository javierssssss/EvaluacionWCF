import { Component, OnInit } from '@angular/core';
import { WebApiService, Tareas } from '../Servicios/web-api.service';
import {Observable} from 'rxjs/internal/Observable' ;
import { JsonPipe } from '@angular/common';

export class Empleado {
  apellido: string;
  empID: string;
  fecha: string;
  jobid: number;
  joblevel: number;
  nombre: string;

  }



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public listado: Empleado[] = []; 
  public empleados : Observable<Empleado[]>;
  constructor(private  webApi : WebApiService) {
   }

  ngOnInit(): void {
    this.devolverEmpleados();
  }
  public devolverEmpleados(){
  
    const url = 'http://localhost:14700/Service1.svc/GetData';

    this.empleados = this.webApi.getEmployees(url);
        this.empleados.subscribe((emps: Empleado[]) => {
          this.listado = emps;    });
  
          
    }

    public  devolverTarea( id: string )    {
      alert(id);
        }

}
