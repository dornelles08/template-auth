import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";
import { EnvService } from "./infra/env/env.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envService = app.get(EnvService);
  const port = envService.get("PORT");

  app.use(cookieParser());

  await app.listen(port);
}
bootstrap();
