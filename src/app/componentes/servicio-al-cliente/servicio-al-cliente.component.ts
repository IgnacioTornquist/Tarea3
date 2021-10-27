import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-servicio-al-cliente',
  templateUrl: './servicio-al-cliente.component.html',
  styleUrls: ['./servicio-al-cliente.component.scss']
})
export class ServicioAlClienteComponent implements OnInit {

  estado:boolean=false;
  formulario:FormGroup;
 
  constructor(private Form:FormBuilder) {
    this.formulario=this.Form.group({
       nombre:['',[Validators.required, Validators.maxLength(50)]],
       telefono:['',[Validators.required, Validators.maxLength(20)]],
       email:['',Validators.required],
       mensaje:['',Validators.required] 
      }
    );
  
  }
  
  ngOnInit(): void {
  }
  validacion2(){
    this.estado=true;
    let datos:any=[{
      "nombre": this.formulario.get("nombre")?.value,
      "telefono": this.formulario.get("telefono")?.value,
      "email": this.formulario.get("email")?.value,
      "mensaje": this.formulario.get("mensaje")?.value,
    }];
  }
  validacion1(value:any){
    
    let datos:any=[{
      "nombre": value.nombre,
      "telefono": value.telefono,
      "email": value.email,
      "mensaje": value.mensaje
    }];
  }
}
