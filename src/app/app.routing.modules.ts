import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { AuthGuard } from "./auth/auth.guard";

/**
 * Arquivo com as rotas da aplicação
 */
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
    },
    { path: 'user/:userName', 
       component: PhotoListComponent,
       resolve: { // Resolve a propriedade antes do componentes ser carregado
         photos: PhotoListResolver // photo-list.resolver.ts
        },
        canActivate: [AuthGuard],
    },
    { path: 'p/add', 
        component: PhotoFormComponent 
    },
    { path: '**', 
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
}) 

export class AppRoutingModule { }
