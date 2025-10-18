import { Observable } from 'rxjs';
import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse } from '../../proto/auth';

export interface AuthService {
  Register(request: RegisterRequest): Observable<RegisterResponse>;
  Login(request: LoginRequest): Observable<LoginResponse>;
}