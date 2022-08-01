import { Injectable } from '@nestjs/common';
import { AxiosService } from 'src/axios/axios.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class LeagueService {
  client: AxiosService;
  constructor(private readonly axios: AxiosService) {}
  async getSummonerInfo(name: string) {
    Logger.log('hi');
    const resp = await this.axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    );
    Logger.log(resp);
    return resp;
  }
}
