import { Injectable } from '@nestjs/common';
import {users} from '../mock';

@Injectable()
export class UserService {
    getUsers(): any {
        return users;
    }
}
