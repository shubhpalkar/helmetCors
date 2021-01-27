// import * as path from 'path';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { BullModule } from '@nestjs/bull';
// import { Module } from '@nestjs/common';
// // import { mailBullConfig } from '../../config/mail';

// const bullModule = BullModule.forRoot(mailBullConfig);

// @Module({
//     imports: [BullModule
//         ,MailerModule.forRoot({
//         defaults: {
//           from: '"No Reply" <noreply@example.com>',
//         },
//         template: {
//           dir: path.join(process.env.PWD, 'templates/pages'),
//           adapter: new HandlebarsAdapter(),
//           options: {
//             strict: true,
//           },
//         },
//         options: {
//           partials: {
//             dir: path.join(process.env.PWD, 'templates/partials'),
//             options: {
//               strict: true,
//             },
//           }
//         }
//       }),]
// })
// export class MailerModule {
    
// }
