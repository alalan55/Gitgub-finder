import { Component, OnInit} from '@angular/core';
import { Subject, Observable} from 'rxjs';
import { ApiService } from './api.service';
import { User, Repos } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  queries$ = new Subject<string>();

  resultado$: Observable<User>
  repositorio$: Observable<Repos>

  teste: object;


  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.getUsuarioComOBS();
    console.log('resposta',this.getUsuarioComOBS())

  }

  getUsuarioComOBS(){
        this.resultado$ = this.api.search(this.queries$);
        this.repositorio$ = this.api.searchRepos(this.queries$);
 
  }
 
}
