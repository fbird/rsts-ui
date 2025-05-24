(async () => {
    const imagemin = (await import('imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
  
    await imagemin(['public/images-sources/*.{jpg,png,jpeg}'], {
      destination: 'public/images/',
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });
    console.log('Images compressed!');
  })();