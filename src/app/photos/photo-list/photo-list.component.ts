import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent implements OnInit {

  title = 'Alurapic'
  photos = []
  filter: string = ''
  nome = 'flavio'
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /**
     * Pega a informação já processada pelo resolver (photo-list.resolver.ts)
     * e preenche em photos
     */
    this.photos = this.activatedRoute.snapshot.data.photos
  }

}
