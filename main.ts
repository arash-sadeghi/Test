/**
 * @description A basic Deno HTTP server.
 * This file uses the Deno standard library's `http/server` module
 * to create and start a simple web server.
 */

// Import the 'serve' function from the Deno standard HTTP library.
// The 'serve' function is the easiest way to start an HTTP server.
import { serve } from "https://deno.land/std@0.207.0/http/server.ts";

/**
 * @param {Request} _req - The incoming request object. We prefix it with an
 * underscore because we are not using it in this simple example.
 * @returns {Response} A new Response object with the body "hi".
 */
const handler = (_req: Request): Response => {
  // Create a new Response object.
  // The first argument is the body of the response, which is "hi".
  // The second argument is an optional object for settings like status and headers.
  return new Response("hi", {
    status: 200, // HTTP status code for OK
    headers: {
      "content-type": "text/plain", // Inform the client that we're sending plain text
    },
  });
};

// A message to let you know the server has started successfully.
console.log("HTTP server listening on http://localhost:5000");

// Start the server using the 'serve' function.
// It takes the handler function as an argument, which will be called
// for every incoming request. We also specify the port number.
serve(handler, { port: 5000 });
