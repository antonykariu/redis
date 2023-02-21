import express from "express";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

const RedisStore = connectRedis(session);
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  password: process.env.REDISPASS,
});

const sessionMiddleware = session({
  store: new RedisStore({ client }),
  secret: "something",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 600000,
  },
});

app.use(sessionMiddleware);
app.use(express.json());

app.get("/", async (req, res) => {
  if (req.session) {
    console.log(req.session.id);
    await client.connect();
    let sessionStored = await client.get("kariuantony@gmail.com")
    console.log(sessionStored)
    console.log("Done")
  }
  res.send({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
