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

  async getShipByNumber(x){
    let url;
    switch (x) {
      case 1 :
          url = 'http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf';
        break;
      case 2 :
          url = 'http://37.187.28.218:8080/team/cosmos/ships/c5c57348-b50c-45e9-a96d-4af44d521ac0';
        break;
      case 3:
          url = 'http://37.187.28.218:8080/team/cosmos/ships/0d8bd6a3-ee42-43ef-a543-02e5ade65b03'
        break;
    }
    const res = await axios.get(url, {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;

  }


  async getShipsByPlanet(x){
    let url;
    switch (x) {
      case 1 :
          url = 'http://37.187.28.218:8080/map/3998198f-7560-4496-bb07-cca6623d18f8/ships';
        break;
      case 2 :
          url = 'http://37.187.28.218:8080/map/95fddff0-5030-4b59-9671-11474048f464/ships';
        break;
      case 3:
          url = 'http://37.187.28.218:8080/map/35090e96-b0da-4d08-b580-09b314e454f4/ships'
        break;
    }
    const res = await axios.get(url, {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    console.log("****")
    console.log("x:", x);
    //console.log(this.check_presence_shipByPlanet(1));
    //console.log(res.data[0])
    //console.log(res.data.some(item => item.shipName === 'P.I.C.N.I.C_03'));
    console.log("****")

    return res.data;

  }
  async check_presence_shipByPlanetV2(x, ship_name){
    let url;
    let planet_name;
    switch (x) {
      case 1 :
          url = 'http://37.187.28.218:8080/map/3998198f-7560-4496-bb07-cca6623d18f8/ships';
          planet_name = 'planet_01';
        break;
      case 2 :
          url = 'http://37.187.28.218:8080/map/95fddff0-5030-4b59-9671-11474048f464/ships';
          planet_name = 'planet_02';
        break;
      case 3:
          url = 'http://37.187.28.218:8080/map/35090e96-b0da-4d08-b580-09b314e454f4/ships';
          planet_name = 'planet_03';
        break;
    }
    const res = await axios.get(url, {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
   // console.log("****")
    //console.log("x:", x);
   // console.log(res.data.some(item => item.shipName === ship_name));
    if (res.data.some(item => item.shipName === ship_name) )
    {

      return planet_name; 
    }

  }


  async loop_shipByPlanetV2(ship_name)
  {
    let planet_name;
    for (let i = 1 ; i < 4; i ++ ){
      if ( this.check_presence_shipByPlanetV2(i,ship_name)){
        switch (i) {
          case 1 :
            planet_name = 'planet_01';
            break;
          case 2 :
            planet_name = 'planet_02';
            break;
          case 3:
            planet_name = 'planet_03';
            break;
        }
      }
      
    }
    return planet_name;
  }

  async check_presence_shipByPlanet(x){
    let ships;
    let ship_name;
    let planet_name;
    switch (x) {
      case 1 :
        ship_name = 'cosmos_01';
        break;
      case 2 :
        ship_name = 'cosmos_02';
        break;
      case 3:
        ship_name = 'cosmos_03';
        break;
    }
 
    for (let i = 1 ; i < 4; i ++ ){
      ships = this.getShipsByPlanet(i);
      if ( ships.some(item => item.shipName === ship_name)){
        switch (i) {
          case 1 :
            planet_name = 'planet_01';
            break;
          case 2 :
            planet_name = 'planet_02';
            break;
          case 3:
            planet_name = 'planet_03';
            break;
        }
        return planet_name;
      }
    }
    return "Not Found";

  }



}
