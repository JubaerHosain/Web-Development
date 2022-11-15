"use strict";

const transporter = require("nodemailer").createTransport({
    service: "gmail",
    auth: {
        user: "jubaerhosain1119@gmail.com",
        pass: "uzeazoddkteymdgc",
    },
});

const mailOptions = {
    from: "jubaerhosain1119@gmail.com",
    to: "raihanrahat4686@gmail.com",
    subject: "Sending Email using Node.js",
    text: "Rahat vai..........",
};

let count = 1;
while(count++ <= 10) {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
