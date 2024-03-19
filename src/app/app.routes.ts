import { Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    { path: 'productos', component: ListaProductosComponent },
    { path: 'productos/detalle', component: DetalleProductoComponent }
];
