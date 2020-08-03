# express-limiter
This is a very primitive and simple to use IP Limiter. This will limit requests per IP per designated time period.

Usage: 

  NOTES: Removing "json_response" parameter from app.use() will just end request! Use if you don't want to send error message.

  EXAMPLES:
  
    WITH JSON-RESPONSE:
    
      let express-limiter = require('./location/express-limiter');
      app.use(express-limiter({
          INTERVAL: 10000,
          MAX_REQUESTS: 10,
          json_response: { success: false, meta: "Too Many Requests!" }
      }));
    
    WITHOUT JSON-RESPONSE:
    
          let express-limiter = require('./location/express-limiter');
          app.use(express-limiter({
              INTERVAL: 10000,
              MAX_REQUESTS: 10
          }));
