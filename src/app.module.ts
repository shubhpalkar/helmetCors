// import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
// import { MailerModule } from './mailer/mailer.module';


@Module({
  // imports: [MailerModule.forRoot({
  //   transport: 'smtps://user@domain.com:pass@smtp.domain.com',
  //   defaults: {
  //     from:'"nest-modules" <modules@nestjs.com>',
  //   },
  //   template: {
  //     dir: __dirname + '/templates',
  //     adapter: new HandlebarsAdapter(),
  //     options: {
  //       strict: true,
  //     },
  //   },
  // }), MailerModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
