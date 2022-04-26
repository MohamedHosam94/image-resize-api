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
    let widthNum: number;
    req.query.width == null
      ? (widthNum = 200)
      : (widthNum = parseInt(req.query.width as string));

    let heightNum: number;
    req.query.height == null
      ? (heightNum = 200)
      : (heightNum = parseInt(req.query.height as string));

    const cachedFile: string = await getCachedImg(
      req.query.title as string,
      req.query.title as string,
      widthNum,
      heightNum
    );

    res.sendFile(cachedFile);
    // console.log(cachedFile , typeof(widthNum));
  }
});

export default image;
