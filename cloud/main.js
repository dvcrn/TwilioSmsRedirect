// Include Cloud Code module dependencies
var express = require('express'),
    twilio = require('twilio'),
    phoneNumber = "+49xxxxxxxx";

// Initialize twilio module
twilio.initialize('accountSid', 'authToken');

// Create an Express web app (more info: http://expressjs.com/)
var app = express();
app.use(express.json());
app.use(express.bodyParser());

app.post('/endpoint', function (request, response) {
    "use strict";
    var twiml, smsBody, smsTo, smsFrom;

    response.type('text/xml');

    // Create a TwiML response generator object
    twiml = new twilio.TwimlResponse();
    smsBody = request.body.Body;
    smsTo = request.body.To;
    smsFrom = request.body.From;

    // Forward the sms
    twilio.sendSMS({
        From: smsTo,
        To: phoneNumber,
        Body: "From " + smsFrom + ": " + smsBody // we're attaching a "From <number>:" here.
    }, {
        success: function () {
            console.log("Sent SMS successfully");
            response.send(twiml.toString());
        },
        error: function () {
            console.log("SMS sending failed.");
            console.log(request.body);
            response.send(twiml.toString());
        }
    });
});

// Start the Express app
app.listen();
