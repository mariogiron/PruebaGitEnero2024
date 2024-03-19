import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    { path: 'productos', component: ListaProductosComponent },
    { path: 'nuevo', component: NuevoProductoComponent },
    { path: 'productos/detalle', component: DetalleProductoComponent }
];
