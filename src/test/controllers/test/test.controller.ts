/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import axios from 'axios';


@Controller('test')
export class TestController {
  constructor(private httpService: HttpService) {}
  @Get('/do')
  async tryScript() {
    try{
      await this.stopEngineShip1();
    }catch(e){}
    await this.startEngineShip1Noveria();
    const carto = await this.getCartoShip1Noveria();
    // Destination
    let endX=0;
    let endY=0;
    // Current Position
    let x=0;
    let y=0;
    for(let i=0;i<carto.length;i++)
    {
      if(carto[i].typeCellule=="End")
      {
        endX=carto[i].x;
        endY=carto[i].y;
      }
    }
    let ship1 = await this.getShip1();
    x = ship1.x;
    y = ship1.y;
    console.log("Ship("+x+","+y+")");
    
    while(x<endX)
    {
      await this.moveShip1(1,0);
      x+=1;
    }
    while(y<endY)
    {

      await this.moveShip1(0,1);
      y+=1;
    }

    console.log("Ship("+x+","+y+")");
    
   /* await this.moveShip1(2,0);
    ship1 = await this.getShip1();
    console.log("Ship x"+ship1.x);*/
    

   // await this.stopEngineShip1();
  }


  async startEngineShip1Noveria()
  {
    const res = await axios.post(
      'http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf/start/95fddff0-5030-4b59-9671-11474048f464', 
      { "actions": [] }, 
      {
        headers: {
          'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
        }
      }
    );
    console.log(res.data);
    
  }

  async stopEngineShip1()
  {
    const res = await axios.post(
      'http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf/end', 
      { "actions": [] }, 
      {
        headers: {
          'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
        }
      }
    );
    console.log(res.data);
    
  }

  async getCartoShip1Noveria()
  {
    const res = await axios.get('http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf/map/95fddff0-5030-4b59-9671-11474048f464/carto', {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;
  }

  async moveShip1(x,y)
  {
    const res = await axios.put(
      'http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf/actions', 
      { "actions": ["move:"+x+","+y] }, 
      {
        headers: {
          'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
        }
      }
    );
  }

  async getShip1()
  {
    const res = await axios.get('http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf', {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;
  }

}
