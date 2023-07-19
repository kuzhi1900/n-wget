import fs from 'fs'
import path from 'path'
import Axios from 'axios'

export async function downloadFile(url, filepath, filename) {
  try {
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(filepath)
    }
    const savePath = path.resolve(filepath, filename)
    const writeStream = fs.createWriteStream(savePath)
    const response = await Axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
    response.data.pipe(writeStream)

    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve)
      writeStream.on('error', reject)
    })
  } catch (error) {
    console.error('An error occurred while downloading the file:', error)
    throw error
  }
}
