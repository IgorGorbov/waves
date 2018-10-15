const mailer = require('nodemailer');
const { welcome } = require('./welcome_template');
const { purchase } = require('./purchase_template');
require('dotenv').config();

const getEmailData = (to, name, token, type, actionData = null) => {
  let data = null;

  switch (type) {
    case 'welcome':
      data = {
        from: 'Waves <gorbov18@gmail.com>',
        to,
        subject: `Welcome to waves ${name}.`,
        html: welcome(),
      };
      break;
    case 'purchase':
      data = {
        from: 'Waves <gorbov18@gmail.com>',
        to,
        subject: `Tkanks for shopping with us ${name}.`,
        html: purchase(actionData),
      };
      break;
    default:
      break;
  }

  return data;
};

const sendEmail = (to, name, token, type) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'gorbov18@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
  });

  const mail = getEmailData(to, name, token, type);

  smtpTransport.sendMail(mail, (err, res) => {
    if (err) console.log(err);
    else console.log('email sent');

    smtpTransport.close();
  });
};

module.exports = { sendEmail };
