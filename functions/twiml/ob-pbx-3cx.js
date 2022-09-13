const twilio_version = require('twilio/package.json').version;

exports.handler = function(context, event, callback) {

  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);

  // Extract To and From Number from SIP URI
  const toNumberMatch = event.To.match(/^sip:(\+[^@][0-9]+)@/);
  const toNumber = toNumberMatch ? toNumberMatch[1] : null;
  console.log(`ToNumber: ${toNumber}`);

  const fromNumberMatch = event.From.match(/^sip:(\+[^@][0-9]+)@/);
  const fromNumber = fromNumberMatch ? fromNumberMatch[1] : null;
  console.log(`FromNumber: ${fromNumber}`);

  // Build TwiML Response
  const twiml_voice_response = new Twilio.twiml.VoiceResponse();
  
  const dial = twiml_voice_response.dial({
    callerId: fromNumber,
    answerOnBridge: true,
  });
  dial.number({
    // listen for the following events
    statusCallbackEvent: 'initiated ringing answered completed',

    // replace with processing endpoint to capture call SID for outbound leg 
    statusCallback: 'https://webhook.site/587759cd-dd0f-4715-a9bd-eec12c099d70'
  }, toNumber);

  /**
   Example TwiML response
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Dial callerId="+61412345678" answerOnBridge="true">
        <Number satusCallbackEvent="initiated ringing answered completed" statusCallback="https://processing-enpoint/">+61412345678</Number>
      </Dial>
    </Response>

   **/

  callback(null, twiml_voice_response);
};