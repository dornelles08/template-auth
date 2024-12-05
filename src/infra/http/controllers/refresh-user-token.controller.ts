import { RefreshUserTokenUseCase } from "@/domain/application/use-cases/refresh-user-token";
import { Public } from "@/infra/auth/public";
import { RefreshToken } from "@/infra/cookies/refreshToken.decorator";
import { Controller, HttpCode, Post, Res } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

@Controller("/token/refresh")
@Public()
export class RefreshUserTokenController {
  constructor(
    private refreshUserToken: RefreshUserTokenUseCase,
    private jwtService: JwtService
  ) {}

  @Post()
  @HttpCode(200)
  async handle(
    @Res({ passthrough: true }) res: Response,
    @RefreshToken() refreshToken: string
  ) {
    try {
      await this.jwtService.verifyAsync(refreshToken);
      const jwtDecodeResult = await this.jwtService.decode(refreshToken);
      const userId = jwtDecodeResult.sub;

      const { accessToken, refreshToken: newRefreshToken } =
        await this.refreshUserToken.execute({
          userId,
        });

      res.cookie("refreshToken", newRefreshToken, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: true,
      });

      return { accessToken };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
