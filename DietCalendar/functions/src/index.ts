import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

export const testScheduleFunction = functions
  .region('asia-northeast1')
  .pubsub.schedule('50 16 * * *')
  .timeZone('Asia/Taipei')
  .onRun(async context => {
    alert('This will be run every min!');
  });
