import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../Interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  constructor(private _snackBar:MatSnackBar) { }

  mostrarAlerta(mensaje:string, tipo:string){
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    })
  }

  //METODO PARA GUARDAR SESION DE USUARIO EN JSON EN EL LOCAL STORAGE

  guardarSesionUsuario(usuarioSession:Sesion){
    localStorage.setItem("usuario",JSON.stringify(usuarioSession));
  }

  obtenerSesionUsuario(){
    const dataCadena = localStorage.getItem("usuario");
    const usuario = JSON.parse(dataCadena!)  //el signo ! significa que esperamos un valor que no es nulo
    return usuario;

  }

  eliminarSesionUsuario(){
    localStorage.removeItem("usuario");
  }
}
