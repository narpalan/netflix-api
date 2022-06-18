import { Repository } from "typeorm";
import { AppDataSource } from "../../config/database/data-source";
import { Show, User } from "../entities";
import BadRequestException from "../exceptions/bad-request.exception";

class ListService{
  userRepository: Repository<User>;
  showRepository: Repository<Show>;
  constructor(){
    this.showRepository = AppDataSource.getRepository(Show);
    this.userRepository = AppDataSource.getRepository(User);
  }

  async add(showId: number, user: User){
    if(this.isMovieInList(showId, user)){
      throw new BadRequestException('Filme já adicionado.');
    }

    const show = await this.showRepository.findOne({where: {id: showId}});
    if(!show){
      throw new BadRequestException(`O show id: ${showId} não foi encontrado.`);
    }
    user.list = [...user.list,]
  }

  private isMovieInList(showId:number, user:User){
    return 
  }

  remove(showId: number, user: User){
    const newUserList = user.list.filter(show => show.id !== showId)
    return this.userRepository.save({
      ...user, 
      list: newUserList
    })
  }
}
