import express, { Request, Response } from 'express';
import session from 'express-session';

import fs from 'fs';
import Path from 'path';
import checkFile from './checkfile';

//After updating express-session, it changes from sessionData to session.
//So, Declaration merging on express-session
declare module 'express-session' {
  interface Session {
    token: string;
  }
}
const DATA_DIR = Path.join(__dirname, './data');
console.log('default dir: ', DATA_DIR);
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'absdajfaldsjflasdj',
    resave: true,
    saveUninitialized: true,
  })
);

app.use('/pub/proxy', routes);
app.use('/api/proxy', routes);

app.get('/', (req: Request, res: Response) => {
  console.log('you are on root page');
  res.send('you are on root');
});

/**
 * Write/Create json file with new data http://localhost:3000/save/5 output: {"name":"five","age":"5"}
 **/
app.post('/save/:id', (req, res) => {
  const { id } = req.params;
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
    console.log('if no file dir:', DATA_DIR);
  }
  fs.writeFile(`${DATA_DIR}/${id}.json`, JSON.stringify(req.body), (err) => {
    if (err) throw err;
    res.send({
      message: 'File saved or updated successfully!',
      DATA_DIR: DATA_DIR,
    });
  });
});

//reads file Id and serves response back as JSON http://localhost:3000/5 output: {"name":"five","age":"5"}
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const path = Path.join(DATA_DIR, `${id}.json`);
  const fileExists = await checkFile(path);
  if (!fileExists) {
    return res.send({ message: `No data found for id: ${id}` });
  }
  const data = fs.readFileSync(path);
  const parsedData = JSON.parse(data.toString());
  res.send({ parsedData: parsedData, path: path });
});

app.listen('3000', () => {
  console.log('app is running on 3000');
});
