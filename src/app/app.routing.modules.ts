import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { SigninComponent } from "./home/signin/signin.component";

/**
 * Arquivo com as rotas da aplicação
 */
const routes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    { path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: { // Resolve a propriedade antes do componentes ser carregado
            photos: PhotoListResolver // photo-list.resolver.ts
        }
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
