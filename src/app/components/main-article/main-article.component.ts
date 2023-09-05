import { Component } from '@angular/core';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent {
  title: string = 'Main Article';
  imagePath: string = 'https://picsum.photos/seed/picsum/600/300';
  imageAlt: string = 'Random image from Lorem Picsum';
}
