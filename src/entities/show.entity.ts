import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { ShowCategory } from "../enum";
import Episode from "./episode.entity";

@Entity('shows')
class Show{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({length: 200})
  cover: string;

  @Column({length: 200, default:''})
  director:string;

  @Column({length: 200, default:''})
  actors: string;

  @Column({type: 'longtext'})
  description: string;

  @Column({type: 'enum', default: ShowCategory.MOVIE, enum: ShowCategory})
  category: ShowCategory;

  @OneToMany(()=>Episode, episode => episode.show, {eager:true})
  episodes: Episode[]
}

export default Show;
