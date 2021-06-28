import { CameraDTO } from 'src/cameras/dto/cameraDTO';
import { Camera } from 'src/cameras/infra/typeorm/entities/camera.entity';

export class AccountMapper {
  public static fromEntityToPublic(input: Camera): CameraDTO {
    const entity = new Camera();
    entity.id = input.id;
    entity.streamid = input.streamid;
    entity.url = input.url;
    return entity;
  }
}
