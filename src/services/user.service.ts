import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';


import { AppDataSource } from '../../config/database/data-source';
import { User } from '../entities';
import { BadRequestException } from '../exceptions';


interface createUserDTO{
  email: string;
  pswd: string;
}

class UserService{
  userRepository: Repository<User>

  constructor(){
    this.userRepository = AppDataSource.getRepository(User);

  }

  private async emailUsed(email:string){
    const userFound = await this.userRepository.findOne({where: {email}})
    return !!userFound;
  }

  async getUserByEmail(email:string){
    const userFound = await this.userRepository.findOne({where: {email}})
    return userFound;
  }

  /**
   * Cria um registro de usuário no banco de dados, encriptando a senha.
   * 
   * @param createUserDTO dados do usuário
   * @returns 
   */
  async create(createUserDTO: createUserDTO){
    const { email, pswd } = createUserDTO; 
    
    const emailUsed = await this.emailUsed(email);
    if(emailUsed){
      throw new BadRequestException('Usuário já cadastrado.');
    }

    const SALTS =  5;    

    const newUserPayload = {
      email,
      pswd: await bcrypt.hash(pswd, SALTS)
    }
    
    return this.userRepository.save(newUserPayload);
  } 
}

export default UserService;
