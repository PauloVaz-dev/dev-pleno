import { integer } from 'aws-sdk/clients/cloudfront';
import { Project } from 'src/projects/infra/typeorm/entities/project.entity';
import { StreamServer } from 'src/servers/infra/typeorm/entities/stream-server.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

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

  @Column({ nullable: true })
  server_id?: number;

  //   constructor() {
  //     if (!this.id) this.id = uuidV4();
  //   }
}
