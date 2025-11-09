/*
Event Loop
The Event Loop is the mechanism that allows JavaScript (which is single-threaded) to handle asynchronous tasks — like setTimeout, fetch, or promises — without blocking the main thread.

It ensures your code runs non-blocking, even though JavaScript can only do one thing at a time.




⚙️ How JavaScript Executes Code

JavaScript uses a runtime environment (like the browser or Node.js) that consists of:

🧾 Call Stack — Where your code runs line by line (synchronous part).

📬 Web APIs — Handles async tasks (e.g., timers, HTTP requests, event listeners).

📥 Callback Queue — Stores callbacks waiting to be executed after async work is done.

🔁 Event Loop — Constantly checks if the call stack is empty and moves callbacks from the queue to the stack.
 */

console.log("Start")


setTimeout(()=> {
    console.log("I am Waiting.......")
}, 2000)

console.log("End")