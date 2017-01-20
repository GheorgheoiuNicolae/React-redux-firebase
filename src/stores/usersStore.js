// import _ from 'lodash';
// import { EventEmitter } from 'events';
// import dispatcher from '../dispatchers/dispatcher';

// class UsersStore extends EventEmitter {
//   constructor() {
//     super();
//     this.todos = [];
//   }

//   loginUser(){
//     console.log('login user');
//   }

//   logout(){
//     console.log('logout');
//   }

//   register(){
//     console.log('register')
//   }

//   handleActions(action){
//     switch(action.type){
//       case 'LOGIN': {
//         this.loginUser(action)
//         console.log('userstore - LOGIN');
//         break
//       }
//       case 'LOGOUT': {
//         this.logout(action)
//         console.log('userstore - LOGOUT');
//         break
//       }
//       case 'REGISTER_ANONYMOUS_USER': {
//         this.register(action);
//         break
//       }
//       default: {
//       }
//     }
//   }
// }

// const usersStore = new UsersStore();
// window.usersStore = usersStore;

// dispatcher.register(usersStore.handleActions.bind(usersStore));
// window.dispatcher = dispatcher;

// export default usersStore;
