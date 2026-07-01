import { Routes } from '@angular/router';
import { Master } from './components/master/master';
import { Client } from './components/client/client';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'master',
        pathMatch:'full',

    }
    ,{
        path:'master',
        pathMatch:'full',
        component:Master
    },
    {
        path:'client',
        component:Client
    }
];
