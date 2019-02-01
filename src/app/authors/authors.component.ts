import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe((authors) => {
      console.log(authors);
    });
  }

  authorsForm = new FormGroup({
    name: new FormControl(''),
    nationality: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.authorsForm.value)
  }

  
}