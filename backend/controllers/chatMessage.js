const dialogflow = require('dialogflow');
const uuid = require('uuid');
const path = require('path')

const m = {
  type: "service_account",
  project_id: "tekvibe-assistant-iqij",
  private_key_id: "e671f69fcf86a8efc16f072a5016ac76fb8ea82b",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD2W2wfJer0dEiW\nr/Z9pFpZmjovqav9+rLucFn6+au2PEMl8e1vJpxbnD/zFrTLP0BsqQtD+F7joEhN\nhB6enGXzShnJ0QDAhHHExK3iew3a6Cs0RHYq0TQh/fDlqwNu43sgXiCiCVh9hXE6\nn2rKunNTKDsZQDXHT5ypGvgjaCP7rXEr5ae0rf9uFQpZuC0gw0dBPsfyry6gpkFo\nQ3jjevkRrQQDwNh2MIrz4L1OwCX9YMeWM3rMfwRvPgigxOj/UctMhwdYpttaD5vl\nbI0mDCWFBF7yPN8Mt39rJg8o52TaGixAzM2I42PWRWa/wluMkIiIOD8dmlFjHY+O\nmCUrPCi/AgMBAAECggEARlVyiHAEZNdAFBlXp6ZBDzzLaOkpi+DDrfRQlCksv2H0\nD8TCs02ULUluLoIoirBbvcoDR9wEhzsu+UaDkWf4aV2aADbV3qDRdEpslHDqUzme\ngBUdoXrJxfyghols+P8kG2kUKv69D1UGLyTtUcSqgS7GtJ5S3Dzb7qGe/0jPoR3j\ngBjfKhENV3sVT53K07sZoQVZZvEZ7HzdfJWeT58tduEb2ZFjSzTjZAXeiEha5IE3\npFBk8IJz9dXAf4Cs02iqRv6h5yTtC/UIRDCkANaiJNmvVYKnf2FUuR790vyHN7nM\nbPh9Gql3W6pZMUgK0s+kIYThD2xmwt4FQi7cAXLerQKBgQD8eVUGdu2QDSHBbfzc\nOl5DddCyPzzGv4dEoK0sZJVlfqtmsTlyhnVGlp71lkLt2DkWEA1rT1/7qQ4h40uZ\nKlC0RWfvlo14IPRKsoCf8N/mlZ2rVfsw1aszewOFU9738vuc2UV3+Sxcy3wGkRNt\nuoAXVtC4a7OIv3fXuu760+kF+wKBgQD5zDiDX7i2dsK+T53rsVfQPtbdIMtuOgfU\nqgu/dOwyi+P9UiD9OAFIvmkPlYhjbjkdnNVMUGjPEpQa2hu27Qs/FIR8X3zD7F6H\nGMM4MyxiBfVj6n3Fv3Rjmhr8ki8U4AukfCRZgbJVka7a09LgnomnNvyQlv795nQV\nlnx71ayhDQKBgEtDnF41+/HyiDqSoEvCtrEjoRhSE7soA5oo0Bco0QSVs2EEuhxz\nCukFI9QQfFlNGQ+Dr4xq+DEcn5LooHPDkpV7D1X0Kq5CHLFb704+z3B876jRE/Xl\n7IiHRnBrpU+DRxDmEHiIdnofSxTmEMWoUGEkx0oDCV1dvss39eAeZhwbAoGBANYk\nAlZtGrYg/TWUnzbMIxF8rUmHsZ1e1hOzarrIiyuRzPL/ExTAjClGQl5/vBoxBXmj\nVx9C13ac4KZcT+HzN+7tsd3FJfn3idmamtB03hlyLjlnbka1qBsyouvejcoBfzmU\nyryIeM7uQs2JRYAVqL/WXZG+P/59LwrKpRCrzn+JAoGAXoELWld9qDxd+MlctO6/\nxnd2aNF9dGOyHpFKw9bTeMXUtu2O4Yy8+2Apgwa7Xj38wG0DgANnHT6a/3V6TuCp\nfCvTUpfeNtW4Eu2fXUBk2paoxfWvA4jLb4823a5JgsNYP40Ty9XnhJ4ek1gwultA\nJ9NL873zquxXvBIF50URHyo=\n-----END PRIVATE KEY-----\n",
  client_email: "tekvibeecomservice@tekvibe-assistant-iqij.iam.gserviceaccount.com",
  client_id: "109287147007455882689",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/tekvibeecomservice%40tekvibe-assistant-iqij.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
}
async function sendMessageToDialogflow(req, res) {

// Load the service account key JSON file
// const keyFilename = path.join(__dirname, '../config/dialogFlowService.json');
// const configObj = require(keyFilename)




// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(m.project_id, m.client_id);

// console.log("secion Client==>", sessionClient);
// console.log("secion Path==>", sessionPath);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: "req.body.userMsg",
        languageCode: 'en-US',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent', responses);
  console.log(responses[0].queryResult);
}


module.exports = sendMessageToDialogflow