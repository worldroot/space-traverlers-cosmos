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
    let oxygene_2 = ship1.currentRessource.oxygene * 0.2;
    let fuel_2 = ship1.currentRessource.fuel *  0.66;
    let food_2 = ship1.currentRessource.food * 0.2;
    let water_2 = ship1.currentRessource.water * 0.2;
    let temperature_2 =ship1.currentRessource.temperature;
    let crew_2 = ship1.currentRessource.crew;

    // SHIP 3
    let ship_3 = await this.appService.getShipByNumber(3);
    let oxygene_3 = ship1.currentRessource.oxygene * 0.2;
    let fuel_3 = ship1.currentRessource.fuel *  0.66;
    let food_3 = ship1.currentRessource.food * 0.2;
    let water_3 = ship1.currentRessource.water * 0.2;
    let temperature_3 =ship1.currentRessource.temperature;
    let crew_3 = ship1.currentRessource.crew;


    let ships_p1 = await this.appService.getShipsByPlanet(1);
    let ships_p2 = await this.appService.getShipsByPlanet(2);
    let ships_p3 = await this.appService.getShipsByPlanet(3);

    return { ship1: ship1 , oxygene: oxygene, fuel: fuel, food: food, water: water, temperature: temperature , crew: crew, ships_p1: ships_p1, ships_p2: ships_p2, ships_p3: ships_p3,
      ship_2: ship_2, oxygene_2: oxygene_2, fuel_2: fuel_2, food_2: food_2, water_2: water_2, temperature_2: temperature_2, crew_2: crew_2
    
    };
  }
}
