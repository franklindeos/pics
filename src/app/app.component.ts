import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  title = 'Alurapic'
  photos = [];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }

  
}
