import { Routes } from '@angular/router';
import path from 'node:path';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    path{ path:'index', component:IndexComponent}
];
