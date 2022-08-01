import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';
import { AxiosService } from 'src/axios/axios.service';

@Module({
  providers: [LeagueService, AxiosService],
  controllers: [LeagueController],
})
export class LeagueModule {}
