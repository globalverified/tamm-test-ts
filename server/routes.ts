import express, { Request, Response, NextFunction } from 'express';
let router = express.Router();
const app = express();
import * as fs from 'fs';

//middleware to check if req has a session authorization token
const checkSession = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.token) {
    next();
  } else {
    res.send('Invalid session');
  }
};

router.use(checkSession);

app.use(express.static(__dirname + '/public'));

router.route('/bpm/start').get(checkSession, (req: Request, res: Response) => {
  console.log('pub/proxy/bpm/start called session id is ', req.sessionID);
  res.send('pub/proxy/bpm/start called');
});

router.route('/adu-ms/get').get(checkSession, (req: Request, res: Response) => {
  console.log('api/proxy/adu-ms/get called session id is ', req.sessionID);
  res.send('api/proxy/adu-ms/get called');
});

router
  .route('/save/:id')
  .get((req: Request, res: Response) => {
    //reads file Id and serves back as JSON http://localhost:3000/pub/proxy/save/29 output: {"fileID":"29"}
    res.json({ fileID: req.params.id });
  })
  .post((req: Request, res: Response) => {
    //writes contents of request body that is JSON to file named id.json
    var body = '';
    var filePath = __dirname + '/id.json';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      fs.appendFile(filePath, body, function () {
        res.end();
      });
    });
    res.send('new content updated successfully');
  });

module.exports = router;
