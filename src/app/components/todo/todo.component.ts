import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodos();
  }

}
