import { Repository } from "typeorm";

import { AppDataSource } from "../../config/database/data-source";
import { Show } from "../entities";
import { NotFoundException } from "../exceptions";

const notFoundMsg = (id: number) => {return `O show de id: ${id} não foi encontrado`} ;

interface createShowDTO {
  title: string;  
}

class ShowService {
  private showRepository: Repository<Show>;

  constructor(){
    this.showRepository = AppDataSource.getRepository(Show);
  }
  

  /**
   * Retorna uma lista de shows
   * 
   * @returns Retorna uma lista de filmes
   * 
   */
  async list(){
    return this.showRepository.find()
  }

  /**
   * Retorna um ou mais filmes
   *  
   * @param movie - retorna dados referente ao/aos filme/filmes passado
   * 
   * @param limiter - numero máximo de filmes retornados
   * 
   * @param fields - campos a serem retornados na busca
   * 
   * @returns Retorna um ou mais filmes
   * 
   * @beta
   */
  async find(show: Show | boolean | number  = false, limiter:number = 0){
    if(show === false){
      return this.showRepository.find()
    }
    else if(typeof show == 'number'){
      const id = show;
      const showToReturn = await this.findOne(id);  
      if(!showToReturn){
        throw new NotFoundException(notFoundMsg(id));
      }   
      return showToReturn;
    }
    else return null;
  }

  async findOne(id: number){   
    const show = await this.showRepository.findOne({where: {id} } );

    if(!show){
      throw new NotFoundException(notFoundMsg(id));
    }
    else{
      return show;
    }        
  }
  
  async delete(id: number){   
      const show = await this.showRepository.delete(id);

    if(show.affected){
      return show;
    }
    else throw new NotFoundException(notFoundMsg(id));    
  }

  create(show: createShowDTO){
    return this.showRepository.save(show);
  }
}

export default ShowService
