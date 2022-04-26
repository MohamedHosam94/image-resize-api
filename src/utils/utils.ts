import path from 'path';

import fs from 'fs';

import sharp from 'sharp';

const resize = async (
  name: string,
  width: number,
  height: number,
  cached: string
): Promise<void> => {
  await sharp(name)
    .resize(width, height)
    .toFile(path.join('./storage/cached', `${cached}-cached.jpg`));
};

const getCachedImg = async (
  cacheName: string,
  name: string
): Promise<string> => {
  if (
    fs.existsSync(
      path.resolve('./storage', 'cached', `${cacheName}-cached.jpg`)
    )
  ) {
    console.log('true it exist');
    return path.resolve('./storage', 'cached', `${cacheName}-cached.jpg`);
  } else {
    await resize(
      path.resolve('./storage', 'images', `${name}.jpg`),
      200,
      200,
      name
    );

    return path.resolve('./storage', 'cached', `${cacheName}-cached.jpg`);
  }
};

export default getCachedImg;
