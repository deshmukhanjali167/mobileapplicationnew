import { Routes } from '@angular/router';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { HomepageComponent } from './component/homepage/homepage.component';

export const routes: Routes = [
    {path:'',
        redirectTo:"home",

        pathMatch:'full'
    }
    ,{
        path:"home",
        component:HomepageComponent
    }
    ,{
        path:"first",
        component:FirstpageComponent
    }
];