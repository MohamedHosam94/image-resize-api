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
    .toFile(
      path.join('./storage/cached', `${cached}-cached-${width}-${height}.jpg`)
    );
  console.log(width, height);
};

const getCachedImg = async (
  cacheName: string,
  name: string,
  width: number,
  height: number
): Promise<string> => {
  if (
    fs.existsSync(
      path.resolve(
        './storage',
        'cached',
        `${cacheName}-cached-${width}-${height}.jpg`
      )
    )
  ) {
    console.log('true it exist');
    return path.resolve(
      './storage',
      'cached',
      `${cacheName}-cached-${width}-${height}.jpg`
    );
  } else {
    await resize(
      path.resolve('./storage', 'images', `${name}.jpg`),
      width as number,
      height as number,
      name
    );

    return path.resolve(
      './storage',
      'cached',
      `${cacheName}-cached-${width}-${height}.jpg`
    );
  }
};

export default getCachedImg;
