import { Module } from '@nestjs/common';
import { FtpModule } from 'nestjs-ftp';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    FtpModule.forRootFtpAsync({
      useFactory : async ()=>{
          return {
            host:"test.rebex.net",
            password:"password",
            port:21,
            user:"demo",
            secure:true
          }
      },
      inject: [AppService]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
