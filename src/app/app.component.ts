import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EdigHerdez';
  favoriteRol: string;
  activar:boolean = true;
  roles: string[] = ['Administrador', 'Facturación', 'Ventas', 'Calidad','Atencion a Clientes','CEO'];
  gei: number = this.roles.length * 30;
}

