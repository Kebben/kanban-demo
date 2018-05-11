import { Component, OnInit } from '@angular/core';
import { BoardItem } from '../model/board.model';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  public newTask: string;
  public myDate: Date;

  public tasks$: Observable<BoardItem[]>;

  constructor(private taskService: TaskService) {
   }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;
  }

  public addTask(){
    console.log(this.myDate);
    this.taskService.addTask(this.newTask, this.myDate);
    this.newTask="";
    this.myDate = new Date;
  }

  public remove(id: number)  {
    this.taskService.remove(id);
  }
}
