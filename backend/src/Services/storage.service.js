var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINTS,
});

function fileupload(file) {
  return new Promise((res, rej) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: "hello",
      },
      (error, result) => {
        if (error) {
          rej(error);
        } else res(result);
      }
    );
  });
}

module.exports=fileupload
