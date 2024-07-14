import { Routes } from '@angular/router';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointsTableT20wc2024Component } from './pages/points-table-t20wc-2024/points-table-t20wc-2024.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/live",
        pathMatch:'full'
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live | Scorer"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"History | Scorer"
    },
    {
        path:"points-table-t20wc-2024",
        component:PointsTableT20wc2024Component,
        title:"Points Table | Scorer"
    }
];
