import mongoose from 'mongoose'

export default function connect (url) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.log('[db] conectada con exito')
}
