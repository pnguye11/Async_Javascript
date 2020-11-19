// /// sync code example

// function otherFunction() {
//   console.log("we are a another function");
//   console.log("do something");
// }

// console.log("start");

// otherFunction();
// console.log("end");

// /// async code example

// console.log("start");

// setTimeout(() => {
//   console.log("we are in a timeout");
// }, 2000);

// const items = [1, 2, 3, 4, 5];

// items.forEach((item) => {
//   console.log(item);
// });

// console.log("end");

// ////callbacks and callback hell

// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("now we have data");
//     callback({ userEmail: email });
//   }, 5000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2"]);
//   }, 1000);
// }
// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   });
// }
// const user = loginUser("hi@hi.com", 12345, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log(user);
// console.log("end");

// ////promises

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("got the user");
// //     resolve({ user: "ed" });
// //   }, 2000);
// // });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     reject(new Error("user not loggin in"));
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err));

// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("now we have data");
//     callback({ userEmail: email });
//   }, 5000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2"]);
//   }, 1000);
// }
// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   });
// }
// const user = loginUser("hi@hi.com", 12345, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log(user);
// console.log("end");

///promise refactor

console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have data");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2"]);
    }, 1000);
  });
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    });
  });
}

loginUser("ed", "lalala")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

///sync

// const user = loginUser("hi@hi.com", 12345, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });
///
console.log("end");
