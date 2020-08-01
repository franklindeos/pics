import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
            return this.http.get<Photo[]>(API + '/' + userName + '/photos');
    }

    /**
     * 
     * @param userName 
     * @param page pagina para navegação. Inicia em 1 em photo-list.resolver.ts
     */
    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
        .append('page', page.toString());
        return this.http
        .get<Photo[]>(API + '/' + userName + '/photos', { params });
        //Pede ao back-end a lista paginada http://localhost:3000/flavio/photos?page=2
    }
}