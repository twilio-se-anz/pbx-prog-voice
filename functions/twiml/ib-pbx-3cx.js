const twilio_version = require('twilio/package.json').version;

exports.handler = function(context, event, callback) {

  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);

  // Define PBX SIP domain (configured in .env file)
  const sip_domain = context.SIP_DOMAIN

  // Using Inbound Phone number on PBX
  const toPhoneNumber = event.To;

  // Build TwiML Response
  const twiml_voice_response = new Twilio.twiml.VoiceResponse();
  
  const dial = twiml_voice_response.dial({
    answerOnBridge: true
  });
  dial.sip(toPhoneNumber + '@' + sip_domain);
  
  /**
   Example TwiML response
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Dial answerOnBridge="true">
        <Sip>+61412345678@youdomain.3cx.com.au</Sip>
      </Dial>
    </Response>
   */
  callback(null, twiml_voice_response);
};