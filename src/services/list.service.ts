import { Repository } from "typeorm";

import { AppDataSource } from "../../config/database/data-source";
import { Show, User } from "../entities";
import { BadRequestException } from "../exceptions";

class ListService{
  userRepository: Repository<User>;
  showRepository: Repository<Show>;

  constructor(){
    this.showRepository = AppDataSource.getRepository(Show);
    this.userRepository = AppDataSource.getRepository(User);
  }
  private isMovieInList(showId:number, user:User){     
    return user.list.filter((show)=>show.id === showId).length > 0
  }

  async add(showId: number, user: User){
    //console.log(`ShowID: ${showId}`);
    //console.log(`User: ${user}`);

    if(this.isMovieInList(showId, user)){
      throw new BadRequestException('Filme já adicionado.');
    }

    const show = await this.showRepository.findOne({where: {id: showId}});
    if(!show){
      throw new BadRequestException(`O show id: ${showId} não foi encontrado.`);
    }

    user.list = [...user.list, show];
    return this.userRepository.save(user);
  }

  

  async remove(showId: number, user: User){
    const newUserList = await user.list.filter(show => show.id !== showId)
    return this.userRepository.save({
      ...user, 
      list: newUserList
    });
  }
}

export default ListService;
