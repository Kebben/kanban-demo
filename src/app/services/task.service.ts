import { Injectable } from '@angular/core';
import { BoardItem } from '../model/board.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: BoardItem[] = [
    {
      id: 1, 
      value: 'feed the cat', 
      isDone: false, 
      dateTime: new Date("2018-05-13 14:15")
    },
    {
      id: 2, 
      value: 'feed the dog', 
      isDone: false, 
      dateTime: new Date("2018-05-15 14:15")},
  ]

  private tasksSubject: BehaviorSubject<BoardItem[]> = new BehaviorSubject(this.tasks);

  public get tasks$(): Observable<BoardItem[]>{
    return this.tasksSubject.asObservable();
  }

  public addTask(newTask: string, myDate: Date) {
    let highId = 1;
    if(this.tasks.length !== 0)  {
          highId = Math.max(...this.tasks.map(x => x.id));
    }

    const newItem: BoardItem = {
      id: ++highId,
      isDone: false,
      value: newTask,
      dateTime: myDate,
    };

    this.tasks.push(newItem);
    this.tasksSubject.next(this.tasks);
  }

  public remove(id: number){
    this.tasks = this.tasks.filter(x => x.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}
