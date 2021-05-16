import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'beer' })
export class Beer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  style: string;

  @Column({ type: 'double precision' })
  abv: number;
}
