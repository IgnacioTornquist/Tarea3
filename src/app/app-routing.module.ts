import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './componentes/home/home.component'
import{ServicioAlClienteComponent} from './componentes/servicio-al-cliente/servicio-al-cliente.component'
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"servicio-al-cliente",component:ServicioAlClienteComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
