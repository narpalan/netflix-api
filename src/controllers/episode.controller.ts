import {Request} from "express";
import { HTTPSTATS } from "../enum";
import { CustomResponse } from "../interfaces";
import EpisodeService from "../services/episode.service";

const episodeService = new EpisodeService();

class EpisodeController{

  public static async create (req: Request, res: CustomResponse){

    try{
      const { body } = req;
      const createdEpisode = await episodeService.create(body);
      res
        .status(HTTPSTATS.CREATED)
        .json(createdEpisode)     
    }catch(e){
      res.errorHandler && res.errorHandler(e)
    }
  }
}
export default EpisodeController;
