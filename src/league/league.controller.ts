import { Controller, Get, Param } from '@nestjs/common';
import { LeagueService } from './league.service';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}
  @Get('summoner/:name')
  getSummoner(@Param('name') name: string): Promise<any> {
    return this.leagueService.getSummonerInfo(name);
  }
}
