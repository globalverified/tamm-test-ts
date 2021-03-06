import express, { Request, Response, NextFunction } from 'express';
let router = express.Router();
const app = express();
//middleware to check if req has a session authorization token
const checkSession = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.token) {
    next();
  } else {
    res.send('Invalid session');
  }
};
app.use(express.static(__dirname + '/public'));
router.route('/bpm/start').get(checkSession, (req: Request, res: Response) => {
  res.send({ message: 'pub/proxy/bpm/start called', session: req.session });
});
router.route('/adu-ms/get').get(checkSession, (req: Request, res: Response) => {
  res.send({ message: 'api/proxy/adu-ms/get called', session: req.session });
});
module.exports = router;
