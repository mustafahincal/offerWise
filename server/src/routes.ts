import { Express, Response, Request } from "express";
import { createUserHandler } from "./controllers/user.controller";
import validate from "./middlewares/validateResource";
import { createUserSchema } from "./schemas/user.schema";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("OK");
  });

  app.post("/api/users", validate(createUserSchema), createUserHandler);
};

export default routes;
