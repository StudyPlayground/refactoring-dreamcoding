// 함수 옮기기
// 필드 옮기기
// 인라인 코드를 함수 호출로 바꾸기

class TodoList {
  #todos;
  constructor() {
    this.#todos = [];
  }

  add(content) {
    this.#todos.push(new Todo(content));
  }

  delete(content) {
    this.#todos = this.#todos.filter((todo) => todo.content !== content);
  }

  print() {
    this.#todos.forEach((todo) => todo.printTodo());
    console.log("==========");
  }

  toggle(content) {
    this.#todos.forEach(
      (todo) => todo.content === content && todo.toggleDone()
    );
  }
}

class Todo {
  #content;
  #isDone;
  constructor(content) {
    this.#content = content;
    this.#isDone = false;
  }

  get content() {
    return this.#content;
  }

  get isDone() {
    return this.#isDone;
  }

  toggleDone() {
    this.#isDone = !this.#isDone;
  }

  printTodo() {
    console.log(`할일: ${this.#content} ${this.#isDone ? "(완료)" : ""}`);
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
