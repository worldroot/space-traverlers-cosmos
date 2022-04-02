import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { map } from 'rxjs';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private httpService: HttpService) {}
  async getShip1(){
    const res = await axios.get('http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf', {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;

  }
}
