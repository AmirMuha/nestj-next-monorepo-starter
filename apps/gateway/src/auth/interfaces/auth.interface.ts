import { Observable } from 'rxjs';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from '@repo/proto/src/generated/auth';

export interface AuthService {
  Register(request: RegisterRequest): Observable<RegisterResponse>;
  Login(request: LoginRequest): Observable<LoginResponse>;
}
