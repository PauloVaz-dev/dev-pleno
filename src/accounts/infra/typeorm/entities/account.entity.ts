import { Project } from 'src/projects/infra/typeorm/entities/project.entity';
import { StreamServer } from 'src/servers/infra/typeorm/entities/stream-server.entity';
import { Camera } from 'src/cameras/infra/typeorm/entities/camera.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ nullable: true })
  project_id?: number;

  @ManyToOne((type) => Project, (project) => project.id)
  @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
  project?: Project;

  @ManyToOne((type) => StreamServer, (streamServer) => streamServer.id)
  @JoinColumn({ name: 'server_id', referencedColumnName: 'id' })
  streamServer?: StreamServer;

  @OneToMany((type) => Camera, (camera) => camera.account)
  cameras?: Camera[];

  @Column({ nullable: true })
  server_id?: number;
}
