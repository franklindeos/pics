import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/internal/Subject'
import { debounceTime } from 'rxjs/operators'
import { PhotoService} from '../photo/photo.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent implements OnInit,OnDestroy {

  title = 'Alurapic'
  photos = []
  filter: string = ''
  debounce: Subject<string> = new Subject<string>(); // Subject from RxJS

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
    /**
     * Incrição no debounce para receber no filtro os valores digitados
     * em photo-list.component.html
     */
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    /**
     * Caso não seja feita a remoção da lista debounce irá continuar com o valor recebido
     * mesmo após a destruição do componente gerando um memory leak.
     */
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            // Necessário fazer a atribuição para que o observer de photos
            // entenda que o objeto foi alterado e atualize o componente
            // se manipulasse o objeto com push, não funcionaria
            if(!photos.length) this.hasMore = false;
        });
}

}
