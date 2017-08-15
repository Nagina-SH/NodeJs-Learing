ERROR:
[nodemon] starting `node server.js`
events.js:160
      throw er; // Unhandled 'error' event


Solutions : Changes the port: That error means you are already running something else on port 4040. Maybe another copy of the dashboard?