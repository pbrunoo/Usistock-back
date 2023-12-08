import { AuthenticationStrategies } from './../constants/authentication-strategies';
import { AuthGuard } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminGuard extends AuthGuard(AuthenticationStrategies.staffAdmin) {}