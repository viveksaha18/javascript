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


/*
🔄 Step-by-Step Flow

🧾 Call Stack:

All synchronous code runs here line by line.

If the stack is busy, nothing else can execute.

🌐 Web APIs (Environment):

When you call async functions like setTimeout, they’re handled outside the main thread by the browser or Node.js APIs.

Once completed, their callback is sent to a queue.

📬 Callback Queue:

Stores functions (callbacks) that are ready to be executed after async work is done.

Example: the function inside setTimeout.

🔁 Event Loop:

Keeps running continuously in the background.

It checks:

“Is the Call Stack empty?”

If yes, it takes the first function from the Callback Queue and pushes it to the Call Stack to execute.
*/
