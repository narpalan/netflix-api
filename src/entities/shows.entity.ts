import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import ShowCategory from "../enum/show-category.enum";

@Entity('shows')
class Show{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: 'longtext'})
  cover: string;

  @Column({length: 200, default:''})
  director:string;

  @Column({length: 200, default:''})
  actors: string;

  @Column({type: 'longtext'})
  description: string;

  @Column({type: 'enum', default: ShowCategory.MOVIE, enum: ShowCategory})
  category: ShowCategory;
}

export default Show
