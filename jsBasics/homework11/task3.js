async function getTodos() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
        throw new Error("GET TODOs failed");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!response.ok) {
        throw new Error("GET users failed");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function runPromiseAll() {
    try {
      const [todo, user] = await Promise.all([getTodos(), getUsers()]);
      const promiseAllResult = { todo, user };
      console.log("Promise.all result:", promiseAllResult);
    } catch (error) {
      console.error("Promise.all error:", error);
    }
  }
  
  async function runPromiseRace() {
    try {
      const result = await Promise.race([getTodos(), getUsers()]);
      console.log("Promise.race result:", result);
    } catch (error) {
      console.error("Promise.race error:", error);
    }
  }
  
  runPromiseAll();
  runPromiseRace();
  