import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IAnuncio } from '../../interfaces/ianuncio.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

 
  arrNoticias = []

  @Input() noticias: IAnuncio[] = [];
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): string {
    let html = "";
    this.noticias.forEach(noticia => {
      html += `<article>
                <h3>Titulo</h3>
                <p>${noticia.title}</p>
                <hr>                
                <h3>Imagen URL</h3>                
                <p>${noticia.url}</p>
                <hr>
                <h3>Texto</h3>                
                <p>${noticia.text}</p>
                <hr>
                <h3>Fecha</h3>
                <p>${noticia.fecha}</p>
              </article>`
    })

    return html;
  }

  newNoticia: IAnuncio = {
        title:"",
        url: "",
        text: "",
        fecha: ""
  };

  @Output() noticiaEnviada: EventEmitter<IAnuncio> = new EventEmitter()

  guardarNoticia(): void{
    if(this.newNoticia.title === "" || this.newNoticia.url === "" || this.newNoticia.text === "" || this.newNoticia.fecha === "") {
      alert("Faltan campos por rellenar")
    }
    else {
      this.noticiaEnviada.emit(this.newNoticia)
      this.newNoticia = {
      title:"",
      url: "",
      text: "",
      fecha: ""
    }
    
};
  }

  

}
