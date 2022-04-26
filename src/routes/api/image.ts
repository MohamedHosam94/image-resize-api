import express from 'express';
import path from 'path';

import getCachedImg from '../../utils/utils';

import fs from 'fs';

const image = express.Router();

image.get('/', async (req: express.Request, res: express.Response) => {
  if (
    !fs.existsSync(
      path.resolve('./storage', 'images', `${req.query.title}.jpg`)
    )
  ) {
    res.send('Image Does Not Exist .. Please add Image');
  } else {
    const cachedFile: string = await getCachedImg(
      req.query.title as string,
      req.query.title as string
    );

    res.sendFile(cachedFile);
    console.log(cachedFile);
  }
});

export default image;
