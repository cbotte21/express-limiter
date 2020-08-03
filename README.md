# express-limiter
<b>This is a very primitive and simple to use request limiter. This will limit requests per IP per designated time period.</b>

NOTES: Removing "json_response" parameter from app.use() will just end request! Use if you don't want to send error message.

Usage: 

    // REQUIRE && CONFIGURE
    
      let express_limiter = require('./location/express-limiter');
      const limiter = express_limiter({
          INTERVAL: 10000,
          MAX_REQUESTS: 10,
          json_response: { success: false, meta: "Too Many Requests!" } // READ NOTES
      });
      
    // GLOBAL
        
      app.use(limiter);
      
    // PRIVATE
    
      app.get('/', limiter, (req, res) => {
        res.send("Page Working!");
      });
