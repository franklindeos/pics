import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Alurapic'
  photos = [];
  constructor(http: HttpClient) {
    console.log(http)
  }
  }
