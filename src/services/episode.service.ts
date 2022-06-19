import { Repository } from "typeorm";

import { AppDataSource } from "../../config/database/data-source";
import { Show, Episode } from '../entities';
import { BadRequestException } from "../exceptions";

type CreateEpisodeDTO = Omit<Episode, 'id'> & {showId: number}

class EpisodeService {
  private episodeRepository: Repository<Episode>;
  private showRepository: Repository<Show>;

  constructor(){
    this.episodeRepository = AppDataSource.getRepository(Episode);
    this.showRepository = AppDataSource.getRepository(Show);    
  }

  async create(createEpisode: CreateEpisodeDTO){
    const { showId } = createEpisode;

    const show = await this.showRepository.findOne({where:{id:showId}});
    if(!show){
      throw new BadRequestException(`O show id: ${showId} não foi encontrado.`);
    }

    const createdEpisode = await this.episodeRepository.save(createEpisode);
    show.episodes = [...show.episodes, createdEpisode]
    await this.showRepository.save(show)
    return createdEpisode;
  }
}

export default EpisodeService;
