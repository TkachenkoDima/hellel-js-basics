function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("GET TODOs failed");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("GET users failed");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let promiseAllResult;
Promise.all([getTodos(), getUsers()])
  .then(([todo, user]) => {
    promiseAllResult = { todo, user };
    console.log("Promise.all result:", promiseAllResult);
  })
  .catch((error) => {
    console.error("Promise.all error:", error);
  });

let promiseRaceResult;
Promise.race([getTodos(), getUsers()])
  .then(([todo, user]) => {
    promiseRaceResult = { todo, user };
    console.log("Promise.race result:", promiseRaceResult);
  })
  .catch((error) => {
    console.error("Promise.race error:", error);
  });
