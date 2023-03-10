import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/interfaces/post';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss']
})
export class NuevoPostComponent implements OnInit {
  nombre!: string
  descripcion!: string

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  agregarPost() {
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      description: this.descripcion
    }

    this.toastr.success('Post anhadido', 'Post Registrado!')

    this.nombre = ''
    this.descripcion = ''
  }

}
