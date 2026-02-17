//java script is a syncronus program which means that it will execute the code line by line and it will wait for the previous line to finish before executing the next line. which means it can be blocked by a long running task. 
// to avoid this we can use asynchronous programming which allows us to execute code without blocking the main thread.
// there are several ways to achieve asynchronous programming in javascript, such as callbacks, promises and async/await.

//ex of synchronous code 
console.log("Hello");
function longRunningTask() {
    console.log("Starting long running task...");
}
longRunningTask();
console.log("This will be printed after the long running task is finished.");

//ex of asynchronous code set timeout
console.log("Hello");
function longRunningTask() {
    setTimeout(() => {
        console.log("Long running task finished.");
    }, 2000); // this will execute the callback function after 2 seconds
}
console.log(longRunningTask());
console.log("This will be printed immediately after the long running task is started.");