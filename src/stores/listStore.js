// import _ from 'lodash';
// import { EventEmitter } from 'events';
// import dispatcher from '../dispatchers/dispatcher';

// class TodoStore extends EventEmitter {
//   constructor() {
//     super();
//     this.todos = [];
//   }

//   getAll() {
//     console.log('getall')
//     return this.todos;
//   }

//   createTodo(text){
//     this.todos.push({
//       text,
//       isDone: false,
//       id: Date.now()
//     });

//     this.emit("change");
//   }

//   updateTodo(todo){
//     let todos = this.todos;
//     let item = _.find(todos, { id: todo.item.id });
//     let idx = todos.indexOf(item);
//     todos[idx] = todo.item;

//     this.todos = todos;
//     this.emit("change");
//   }

//   deleteTodo(id){
//     let tds = this.todos;
//     let item = _.find(tds,{ id: id});
//     let idx = tds.indexOf(item);
//     console.log('bla', id, tds, item, idx);

//     tds.splice(idx, 1);
//     this.todos = tds;
//     this.emit("change");
//   }

//   createListOfTodos(todos){
//     this.todos = todos;
//     this.emit("change");
//   }

//   handleActions(action){
//     switch(action.type){
//       case 'CREATE_TODO': {
//         this.createTodo(action.text);
//         break
//       }
//       case 'DELETE_TODO': {
//         this.deleteTodo(action.id);
//         break
//       }
//       case 'UPDATE_TODO': {
//         this.updateTodo(action);
//         break
//       }
//       case 'REQUEST_TODOS': {
//         console.log('REQUEST_TODOS');
//         // this.deleteTodo(action.id);
//         break
//       }
//       case 'RECEIVED_TODOS': {
//         this.createListOfTodos(action.todos);
//         break
//       }
//       case 'LOGIN': {
//         // this.createListOfTodos(action.todos);
//         console.log('LOGIN');
//         break
//       }

//       default: {
//       }
//     }
//   }
// }

// const todoStore = new TodoStore();
// console.log(todoStore);
// window.todoStore = todoStore;

// dispatcher.register(todoStore.handleActions.bind(todoStore));
// window.dispatcher = dispatcher;

// export default todoStore;
