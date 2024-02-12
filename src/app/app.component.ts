import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { IAnuncio } from './interfaces/ianuncio.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad5';
  arrNoticias: IAnuncio[] = [
      {
        title: "PS5",
        url: "https://via.placeholder.com/600/24f355",
        text: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        fecha: "09/02/2024"
      },
      {
        title: "Nintendo DS",
        url: "https://via.placeholder.com/600/56a8c2",
        text: "natus nisi omnis corporis facere molestiae rerum in",
        fecha: "09/02/2024"
      }, 
           
   ]

   insertNoticia($event: any): void {
    this.arrNoticias.push($event);
   }

}




