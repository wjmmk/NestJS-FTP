import { Injectable } from '@nestjs/common';
import { FtpService } from 'nestjs-ftp';

@Injectable()
export class AppService {
  constructor(private readonly _ftpService: FtpService){}

  async uploadFile(): Promise<string> {
      try {
          await this._ftpService.upload(source,destination)
      } catch (error) {
          throw new Error(error)
      }
      return "Cargado!!!";
  }
}
