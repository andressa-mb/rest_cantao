import multer from 'multer';

export const upload = multer({
  storage: multer.diskStorage({
    //armazenamento
    destination: (req, file, cb) => {
      cb(null, './public/uploads/users')
    },
    //nome da imagem
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const extensaoImg = ['image/png', 'image/jpeg', 'image/jpg'].find(formatoAceito => formatoAceito == file.mimetype);

    if(extensaoImg){
      return cb(null, true);
    }

    return cb(null, false);
  }
})

