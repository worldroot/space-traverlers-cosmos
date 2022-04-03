import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/ship1')
  @Render('index')
  async getShip1(){
    // SHIP 1
    let ship1 = await this.appService.getShipByNumber(1);
    let oxygene = ship1.currentRessource.oxygene * 0.2;
    let fuel = ship1.currentRessource.fuel *  0.66;
    let food = ship1.currentRessource.food * 0.2;
    let water = ship1.currentRessource.water * 0.2;
    let temperature =ship1.currentRessource.temperature;
    let crew = ship1.currentRessource.crew;

    // SHIP 2
    let ship_2 = await this.appService.getShipByNumber(2);
    let oxygene_2 = ship_2.currentRessource.oxygene * 0.2;
    let fuel_2 = ship_2.currentRessource.fuel *  0.66;
    let food_2 = ship_2.currentRessource.food * 0.2;
    let water_2 = ship_2.currentRessource.water * 0.2;
    let temperature_2 =ship_2.currentRessource.temperature;
    let crew_2 = ship_2.currentRessource.crew;

    // SHIP 3
    let ship_3 = await this.appService.getShipByNumber(3);
    let oxygene_3 = ship_3.currentRessource.oxygene * 0.2;
    let fuel_3 = ship_3.currentRessource.fuel *  0.66;
    let food_3 = ship_3.currentRessource.food * 0.2;
    let water_3 = ship_3.currentRessource.water * 0.2;
    let temperature_3 =ship_3.currentRessource.temperature;
    let crew_3 = ship_3.currentRessource.crew;


    let ships_p1 = await this.appService.getShipsByPlanet(1);
    let ships_p2 = await this.appService.getShipsByPlanet(2);
    let ships_p3 = await this.appService.getShipsByPlanet(3);

    //let presence_ship_1 = await this.appService.check_presence_shipByPlanet(1);
    //console.log(presence_ship_1)
    let presence_ship1;
    let presence_ship2;
    let presence_ship3;
    if (ship1.hasStarted){
      presence_ship1 = await this.appService.loop_shipByPlanetV2("cosmos_01");
    }else{
      presence_ship1 = "Not Found"
    }
    if (ship_2.hasStarted){
      presence_ship1 = await this.appService.loop_shipByPlanetV2("cosmos_02");
    }else{
      presence_ship2 = "Not Found"
    }
    if (ship_3.hasStarted){
      presence_ship3 = await this.appService.loop_shipByPlanetV2("cosmos_03");
    }else{
      presence_ship3 = "Not Found"
    }

  //  console.log("test:"+test);

    return { ship1: ship1 , oxygene: oxygene, fuel: fuel, food: food, water: water, temperature: temperature , crew: crew, ships_p1: ships_p1, ships_p2: ships_p2, ships_p3: ships_p3,
      ship_2: ship_2, oxygene_2: oxygene_2, fuel_2: fuel_2, food_2: food_2, water_2: water_2, temperature_2: temperature_2, crew_2: crew_2,
      ship_3: ship_3, oxygene_3: oxygene_3, fuel_3: fuel_3, food_3: food_3, water_3: water_3, temperature_3: temperature_3, crew_3: crew_3,
      presence_ship1: presence_ship1, presence_ship2: presence_ship2, presence_ship3: presence_ship3
    };
  }
}
