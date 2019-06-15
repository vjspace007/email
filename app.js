var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vjspace007@gmail.com',
        pass: 'Password-1'
    }
});

var mailOptions = {
    from: 'vjspace007@gmail.com',
    to: 'vganapathy@wsgc.com',
    subject: 'Sending Email NodeJS Demo',
    text:'Demo message.'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    }
    else {
        console.log('Email Sent: '+ info.response);
    }
});