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
