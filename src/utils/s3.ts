import { Injectable } from '@nestjs/common';
import * as aws from 'aws-sdk';
@Injectable()
export class S3 {
  constructor() {
    aws.config.update({
      region: 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
  }
  async upload(
    stream: NodeJS.ReadStream,
    mimetype: string,
    bucket: string,
    destinationFilename: string,
  ): Promise<string> {
    const s3 = new aws.S3();
    const s3Params = {
      Bucket: bucket,
      Key: destinationFilename,
      ACL: 'public-read',
      ContentType: mimetype,
      Body: stream,
    };

    const { Location } = await s3.upload(s3Params).promise();
    return Location;
  }
}
