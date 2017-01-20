// import dispatcher from '../dispatchers/dispatcher';
// import * as db from '../database/dbinfo';

// export function login(){  
//   db.auth.signInAnonymously();
//   dispatcher.dispatch({
//     type: 'LOGIN'
//   });
// }

// export function logout(){
//   db.auth.signOut();
//   dispatcher.dispatch({
//     type: 'LOGOUT'
//   });
// }

// export function registerCurrentUser(){
//   let email = 'me@mail.com';
//   let password = 'test7789';
//   console.log(db);
//   var credential = db.fb.auth.EmailAuthProvider.credential(email, password);
//   console.log('credential', credential);
//   db.auth.currentUser.link(credential).then(function(user) {
//     console.log("Anonymous account successfully upgraded", user);
//   }, function(error) {
//     console.log("Error upgrading anonymous account", error);
//   });
  
// }


// export function uploadFile(file){
//   console.log('upload', file)

//   // storage ref
//   let storageRef = db.fb.storage().ref('photos/' + file.name);

//   // upload the file
//   storageRef.put(file);
// }