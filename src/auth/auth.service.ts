import { LoginRequest, LoginResponce, RegisterRequest, RegisterResponce } from './../shared/types';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";


const users = [
    {
        username: 'magzomxzn',
        password: '123',
        token: '123455678',
        firstName: 'Miras',
        lastName: 'Magzom',
        avatar: 'data:image/jpeg;base64,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'
    }
];

@Injectable()
export class AuthService {

    login(data: LoginRequest): LoginResponce {

        if (!data.password || !data.username) {
            throw new BadRequestException();
        }

        const user = users
            .find(u => u.username === data.username && u.password === data.password);

        if (user) {
            return {
                token: user.token
            }
        }
        throw new UnauthorizedException();
    }

    getProfile(token: string) {
        const user = users.find(u => u.token === token);

        if (user) {
            return {
                ...user,
                password: ''
            }
        }
        throw new NotFoundException();
    }



    register(data: RegisterRequest){
        const user= {
            username: '',
            password: '',
            token: '123455678',
            firstName: '',
            lastName: '',
            avatar: 'data:image/jpeg;base64,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'
        }

        if ( !data.username  || !data.firstName|| !data.password || !data.lastName ) {
            throw new BadRequestException();
        }

        if (user) {
           user.username=data.username;
           user.password=data.password;
          
           user.firstName=data.firstName;
           user.lastName=data.lastName;

           
            users.push(user);
           return {
          user

        }
        }
        throw new UnauthorizedException();
    }
}
