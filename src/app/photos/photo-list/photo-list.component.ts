import { Component, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PhotoService} from '../photo/photo.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent implements OnInit {

  title = 'Alurapic'
  photos = []
  filter: string = ''

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  /**
   * debounce vai escutar a mudança no campo de filtro e após um tempo configurado via pipe
   * irá aplicar o filtro
   */

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    /**
     * Pega a informação já processada pelo resolver (photo-list.resolver.ts)
     * e preenche em photos
     */
    this.photos = this.activatedRoute.snapshot.data.photos
  }

  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.filter = '';
            this.photos = this.photos.concat(photos);
            // Necessário fazer a atribuição para que o observer de photos
            // entenda que o objeto foi alterado e atualize o componente
            // se manipulasse o objeto com push, não funcionaria
            if(!photos.length) this.hasMore = false;
        });
}

}
