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
    this.#todos.forEach((todo) => {
      console.log(`할일: ${todo.content} ${todo.done ? '(완료)' : ''}`);
    });
    console.log('==========');
  }

  toggle(content) {
    this.#todos.forEach((todo) => {
      if (todo.content === content) {
        todo.toggle();
      }
    });
  }
}

class Todo {
  #content;
  #done;
  constructor(content) {
    this.#content = content;
    this.#done = false;
  }
  get content() {
    return this.#content;
  }

  get done() {
    return this.#done;
  }

  toggle() {
    this.#done = !this.#done;
  }
}

const todoList = new TodoList();

todoList.add('운동 1시간 하기');
todoList.add('책 30page 읽기');
todoList.add('신문 읽기');
todoList.print();

todoList.toggle('책 30page 읽기');
todoList.print();

todoList.delete('운동 1시간 하기');
todoList.print();

// 함수 옮기기
// 필드 옮기기
// 함수형으로 변환
