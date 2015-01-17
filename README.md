# Twilio SMS Redirect
This is a very simple app for redirecting SMS from twilio to a specified number. It has been designed to run on __parse.com__ and can be used within their free tier.

## Setup
* Edit `twilio.initialize('xxxx', 'xxxx')` inside `main.js` with your twilio Sid and authToken.
* Edit `phoneNumber` inside `main.js` with the phone number you want SMS to be redirected to
* Edit `config/global.json` with your parse app details.
* `parse deploy` the puppy
* Go to twilio -> numbers and set your parse endpoint as request URL
