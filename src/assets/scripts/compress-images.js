import fs from 'fs-extra';
import path from 'path';

(async () => {
  // 动态 import ESM 模块
  const { default: imagemin } = await import('imagemin');
  const { default: imageminMozjpeg } = await import('imagemin-mozjpeg');
  const { default: imageminPngquant } = await import('imagemin-pngquant');

  const srcDir = 'public/images-sources';
  const destDir = 'public/images';

  // 递归获取所有文件
  const getAllFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        results = results.concat(getAllFiles(filePath));
      } else {
        results.push(filePath);
      }
    }
    return results;
  };

  const files = getAllFiles(srcDir);

  for (const filePath of files) {
    const relative = path.relative(srcDir, filePath);
    const outPath = path.join(destDir, relative);

    await fs.ensureDir(path.dirname(outPath));

    // 判断是否是需要压缩的图片
    if (/\.(jpg|jpeg|png)$/i.test(filePath)) {
      const buffer = await imagemin([filePath], {
        plugins: [
          imageminMozjpeg({ quality: 75 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ],
      });

      if (!buffer || !buffer[0] || !buffer[0].data) {
        console.warn(`Skipping ${filePath}, no output from imagemin`);
         await fs.copyFile(filePath, outPath);
        continue;
      }

      await fs.writeFile(outPath, buffer[0].data);
    } else {
      // 其他文件原封不动复制
      await fs.copyFile(filePath, outPath);
    }
  }

  console.log('All files processed! Images compressed and other files copied with original structure preserved.');
})();