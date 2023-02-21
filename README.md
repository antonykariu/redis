# Initialize

1. create a gitpod environment variable to store your redis password

`gp env REDISPASS=<yourpassword>`

## Start

After loading workspace you can launch redis-cli

```bash
$redis-cli -a "yourpassword"
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
127.0.0.1:6379> ping
PONG
```

### Redis Store

```javascript
import connectRedis from "connect-redis";

const RedisStore = connectRedis(session);
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  password: process.env.REDISPASS,
});
```

### Using Redis on request

```javascript
app.get("/", async(req,res, next) => {
  // Store sessionId on redis
  await client.connect()
    .catch((error) => {
      // forward to error handling
      next(error)
      // should break process
    })
  await client.set("key-name",req.sessionID)
    .catch((error) =>{
      next(error)
    })
})
```
