import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '../', '../', 'uploads'),
        filename(request, file, callback){
            const hash = crypto.randomBytes(6).toString('hex')

            let modifiedFileName = file.originalname.split(' ').join('-')
            modifiedFileName = modifiedFileName.split('(').join('-')
            modifiedFileName = modifiedFileName.split(')').join('-')
            
            const fileName = `${hash}-${modifiedFileName}`

            callback(null, fileName)
        }
    }),
}