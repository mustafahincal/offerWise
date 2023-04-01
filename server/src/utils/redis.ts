import dotenv from "dotenv";
const redis = require("redis");
dotenv.config();

/* const client = redis.createClient({
  host: "localhost",
  port: 6379,
}); */

const client = redis.createClient({
  host: "redis",
  port: 6379,
});

const DEFAULT_EXPIRATION = 3600;

export const redisHandler = (
  key: string,
  value?: string | null | undefined
) => {
  return new Promise((resolve, reject) => {
    client.get(key, async (err: any, data: any) => {
      if (err) return reject(err);
      if (data !== null) return resolve(data);
      if (!value)
        return reject({
          success: false,
          message: "No value provided",
        });
      client.setex(key, DEFAULT_EXPIRATION, value);
      resolve(value);
    });
  });
};

export const deleteRedisKey = (key: string) => {
  return new Promise((resolve, reject) => {
    client.del(key, (err: any, data: any) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
