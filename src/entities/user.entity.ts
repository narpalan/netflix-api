import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm";
import Show from "./show.entity";

@Entity('users')
class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:100, unique: true})
  email: string;

  @Column({length: 100})
  pswd: string; 

  @ManyToMany(()=> Show, {eager:true})
  @JoinTable()
  list: Show[]
}

export default User;
