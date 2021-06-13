import { Category } from 'src/category/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ length: 900, nullable: false })
  description: string;

  @Column({ length: 250, nullable: false })
  slug: string;

  @ManyToOne((type) => Category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}
