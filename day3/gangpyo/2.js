class TodoList {
  constructor() {
    this.todos = [];
  }

  add(title) {
    this.todos.push(new Todo(title));
  }

  delete(title) {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }

  print() {
    this.todos.forEach((todo) => {
      console.log(`할일: ${todo.title} ${todo.done ? "(완료)" : ""}`);
    });

    console.log("==========");
  }

  toggle(title) {
    this.todos = this.todos.map((todo) => {
      if (todo.title === title) {
        return new Todo(title, !todo.done);
      }

      return todo;
    });
  }
}

class Todo {
  title;
  done;
  constructor(title, done = false) {
    this.title = title;
    this.done = done;
  }
  get title() {
    return this.title;
  }

  get done() {
    return this.done;
  }
}

const todoList = new TodoList();

todoList.add("운동 1시간 하기");
todoList.add("책 30page 읽기");
todoList.add("신문 읽기");
todoList.print();

todoList.toggle("책 30page 읽기");
todoList.print();

todoList.delete("운동 1시간 하기");
todoList.print();
