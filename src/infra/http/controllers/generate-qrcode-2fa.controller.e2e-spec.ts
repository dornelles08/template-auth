import { AppModule } from "@/app.module";
import { DatabaseModule } from "@/infra/database/database.module";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { hash } from "bcryptjs";
import request from "supertest";
import { UserFactory } from "test/factories/make-user";

describe("Generate QrCode 2FA (E2E)", () => {
  let app: INestApplication;
  let userFactory: UserFactory;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [UserFactory],
    }).compile();

    app = moduleRef.createNestApplication();

    userFactory = moduleRef.get(UserFactory);
    await app.init();
  });

  it("[POST] /auth/qrcode/generate", async () => {
    await userFactory.makePrismaUser({
      email: "johndoe@example.com",
      password: await hash("123456", 8),
    });

    const authResponse = await request(app.getHttpServer())
      .post("/authenticate")
      .send({
        email: "johndoe@example.com",
        password: "123456",
      });

    const { accessToken } = authResponse.body;

    const response = await request(app.getHttpServer())
      .post("/auth/qrcode/generate")
      .set("Authorization", `Bearer ${accessToken}`)
      .send();

    expect(response.statusCode).toBe(200);    
    expect(response.body).toEqual({
      qrCode: expect.any(String),
    });
  });
});
