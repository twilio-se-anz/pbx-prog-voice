# Functions Service to support Programmable Voice from SIP PBX

This Serverless Services will generate TwiML for use with SIP PBX integration with Programmable Voice. 

This Twilio Serverless Function is intended to be deployed in your Twilio Account. 

## Pre-requisites
1. Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli)
2. Install the [serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)

## Setup

### Configure .env

Copy `.env.example` to `.env`

Your `.env` file should have the following variables set:

| Config Value | Description |
| :--| :-- |
| `ACCOUNT_SID`   | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console)|
| `AUTH_TOKEN`    | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console)|
| `SIP_DOMAIN`    | SIP Domain URI of your SIP PBX |

### Deploy

```
$ npm install
```

Using Twilio CLI, deploy code to your Twilio account:

```
$ twilio serverless:deploy
```
