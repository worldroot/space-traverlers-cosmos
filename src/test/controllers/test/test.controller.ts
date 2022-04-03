/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import axios from 'axios';


@Controller('test')
export class TestController {
  public endX;
  public endY;
  
  public x;
  public y;
  
  public tours;
  public planets;
  public planet;
  
  public ship1;

  public material;
  public oxygene;
  public fuel;
  public food;
  public water;
  public temperature;
  public crew ;

  constructor(private httpService: HttpService) {
    this.endX=0;
    this.endY=0;
    this.x=0;
    this.y=0;
    this.tours=0;
    this.planets = [];
    this.ship1=null;
    this.material=0;
    this.oxygene=0;
    this.fuel=0;
    this.food=0;
    this.water=0;
    this.temperature=0;
    this.crew=5;
    this.planet=null;
  }


  @Get("/getShip1")
  getInfos()
  {
    return {"ship":this.ship1,"x":this.x,"y":this.y,"food":this.food,"water":this.water,
  "oxygene":this.oxygene,"fuel":this.fuel,"crew":this.crew,"planet":this.planet};
  }

  @Get("/carto")
  getCartoFront()
  {
    return this.planets;
  }


  @Get('/start')
  async tryScript() {
    // Stop engine if somehow still running
    try{
      await this.stopEngineShip1();
    }catch(e){}
    // Start engine
    await this.startEngineShip1Noveria();
    // Get Carto + EndX;EndY
    await this.getCarto();
    // Get Ship + Stats;
    await this.getShip1();

   // this.planet =await this.getClosestPlanet();
    await this.gotoDestination();

    console.log("Ship("+this.x+","+this.y+")");
    console.log("Stats : ");
    console.log("Oxygene :"+this.oxygene);
    console.log("Fuel :"+this.fuel);
    console.log("Water :"+this.water);
    console.log("Food :"+this.food);
    
    await this.stopEngineShip1();
    return {"ship":this.ship1,"x":this.x,"y":this.y,"food":this.food,"water":this.water,
  "oxygene":this.oxygene,"fuel":this.fuel,"crew":this.crew,"planet":this.planet};
  }

  findPlanetByXAndY(x,y,planets)
  {
    for(let i=0;i<planets.length;i++)
    {
      if(planets[i].x==x&&planets[i].y==y)
      {
        return planets[i];
      }
    }
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
    
  }

  async getCartoShip1Noveria()
  {
    const res = await axios.get('http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf/map/95fddff0-5030-4b59-9671-11474048f464/carto', {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;
  }
  

  async moveShip1API(x,y)
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

  async getShip1API()
  {
    const res = await axios.get('http://37.187.28.218:8080/team/cosmos/ships/a9be3fc4-ce52-4318-89e5-47fbf1cd1aaf', {
    headers: {
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3Ntb3MiLCJpc3MiOiJTcGFjZU9kaXNzZXlBdXRoIn0.2TOfoLg_FFIUqn6iuWkpzDJTQqy6kNQb8Rsak8cSLwg'
    }});
    return res.data;
  }

  async getShip1()
  {
    this.ship1 = await this.getShip1API();
    this.material = this.ship1.currentRessource.material;
    this.oxygene = this.ship1.currentRessource.oxygene;
    this.fuel = this.ship1.currentRessource.fuel;
    this.food = this.ship1.currentRessource.food;
    this.water = this.ship1.currentRessource.water;
    this.temperature = this.ship1.currentRessource.temperature;
    this.crew = this.ship1.currentRessource.crew;
    this.x = this.ship1.x;
    this.y = this.ship1.y;
    console.log("Ship("+this.x+","+this.y+")");
  }

  async getCarto()
  {
    const carto = await this.getCartoShip1Noveria();
    for(let i=0;i<carto.length;i++)
    {
      if(carto[i].typeCellule=="End")
      {
        this.endX=carto[i].x;
        this.endY=carto[i].y;
      }
      if(carto[i].typeCellule=="Planet")
      {
        this.planets.push(carto[i]);
      }
    }
  }

  getClosestPlanet()
  {
    let min_distance = 100000; 
    let distance=0;
    let planet = null;
    for(let i=0;i<this.planets.length;i++)
    {
      if((this.planets[i].x> this.x && this.planets[i].x<this.endX && this.planets[i].y>this.y && this.planets[i].y<this.endY) ||
      (this.planets[i].x< this.x && this.planets[i].x>this.endX && this.planets[i].y<this.y && this.planets[i].y<this.endY) )
      {
      distance = Math.sqrt(Math.pow(this.planets[i].planet.x-this.x,2)+Math.pow(this.planets[i].planet.y-this.y,2));
      
      if (distance<min_distance)
      {
        min_distance = distance;
        planet = this.planets[i];
      }
        
      }
      
    }
    return planet;
  }

  
  public lowFuel()
  {
    if(this.fuel<75)
    {
      return true;
    }
    return false;
  }

  public lowOxygene()
  {
    if(this.oxygene<150)
    {
      return true;
    }
    return false;
  }

  public lowWater()
  {
    if(this.water<200)
    {
      return true;
    }
    return false;
  }

  public lowFood()
  {
    if(this.water<150)
    {
      return true;
    }
    return false;
  }

  async gotoDestination() {    
   while(this.x<this.endX&&this.y<this.endY)
    {
      await this.moveShip1API(1,1);
      this.consumeStats();
      this.x+=1;
      this.y+=1;
      if(this.lowFood()||this.lowFuel()||this.lowOxygene()||this.lowWater())
      {
        this.planet = this.getClosestPlanet();
        if(this.planet)
        {
          await this.goToPlanet();
        }
        
      }
    }


    while(this.x>this.endX&&this.y<this.endY)
    {
      await this.moveShip1API(-1,1);
      this.consumeStats();
      this.x+=-1;
      this.y+=1;
      if(this.lowFood()||this.lowFuel()||this.lowOxygene()||this.lowWater())
      {
        this.planet = this.getClosestPlanet();
        if(this.planet)
        {
          await this.goToPlanet();
        }
        
      }
    }

    while(this.x>this.endX&&this.y>this.endY)
    {
      await this.moveShip1API(-1,-1);
      this.consumeStats();
      this.x+=-1;
      this.y+=-1;
      if(this.lowFood()||this.lowFuel()||this.lowOxygene()||this.lowWater())
      {
        this.planet = this.getClosestPlanet();
        if(this.planet)
        {
          await this.goToPlanet();
        }
        
      }
    }

    while(this.x<this.endX&&this.y>this.endY)
    {
      await this.moveShip1API(1,-1);
      this.x+=1;
      this.y+=-1;
      if(this.lowFood()||this.lowFuel()||this.lowOxygene()||this.lowWater())
      {
        this.planet = this.getClosestPlanet();
        if(this.planet)
        {
          await this.goToPlanet();
        }
        
      }
    }




  }


  public async goToPlanet()  {
    while(this.x<this.planet.x&&this.y<this.planet.y)
    {
      await this.moveShip1API(1,1);
      this.consumeStats();
      this.x+=1;
      this.y+=1;
    }

    while(this.x>this.planet.x&&this.y<this.planet.y)
    {
      await this.moveShip1API(-1,1);
      this.consumeStats();
      this.x+=-1;
      this.y+=1;
    }

    while(this.x>this.planet.x&&this.y>this.planet.y)
    {
      await this.moveShip1API(-1,-1);
      this.consumeStats();
      this.x+=-1;
      this.y+=-1;
    }

    while(this.x<this.planet.x&&this.y>this.planet.y)
    {
      await this.moveShip1API(1,-1);
      this.consumeStats();
      this.x+=1;
      this.y+=-1;
    }

    for(let i=0;i<4;i++) {
      this.oxygene+=this.planet.planet.effectsPerTour.oxygen;
      this.fuel+=this.planet.planet.effectsPerTour.fuel;
      this.food+=this.planet.planet.effectsPerTour.food;
      this.water+=this.planet.planet.effectsPerTour.water;
    }

  }

  public consumeStats()
  {
    this.oxygene-=10;
    this.fuel-=2;
    this.food = this.food - (2*this.crew);
    this.water = this.water - (2*this.crew);
  }

}



