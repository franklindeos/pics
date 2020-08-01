import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

/**
 * Resolve uma propriedade antes do componente ser carregado
 * Nesse caso está resolvendo a propriedade Photos
 */
@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService) {}

    /**
    * Em app.routing.modules.ts está feita a configuração para que 
    * photos de photo-list.component.ts seja resolvida aqui, portanto o retorno
    * de resolve já joga o valor para photos antes do componente ser carregado
    */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName,1)
    }

}