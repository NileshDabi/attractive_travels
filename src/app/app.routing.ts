import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '',                component: ComponentsComponent },
    { path: 'holiday', 
    loadChildren: () => import('../app/pages/holidays/holidays.module')
    .then(m=> m.HolidaysModule)
    },
    { path: 'sightseeing', 
    loadChildren: () => import('../app/pages/sightseeing/sightseeing.module')
    .then(m=> m.SightseeingModule)
    },
    { path: 'view', 
    loadChildren: () => import('../app/pages/view-details/view-details.module')
    .then(m=> m.ViewDetailsModule)
    },
    { path: 'contact', 
    loadChildren: () => import('../app/pages/contact-us/contact-us.module')
    .then(m=> m.ContactUsModule)
    },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
