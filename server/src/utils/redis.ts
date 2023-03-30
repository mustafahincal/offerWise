const redis = require("redis");

const client = redis.createClient();

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
