import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs/internal/Subject'
import { debounceTime } from 'rxjs/operators'

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
  /**
   * debounce vai escutar a mudança no campo de filtro e após um tempo configurado via pipe
   * irá aplicar o filtro
   */

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
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

}
