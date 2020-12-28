import connect from '../../../mongoBD/connect'
import ProductModel from '../../../mongoBD/ProductModel'

const mongoURL = process.env.DB_MONGO_URL

export default async function getProducts (req, res) {
  connect(mongoURL)
  try {
    if (req.method === 'POST') {
      const newModel = new ProductModel(req.body)
      const response = await newModel.save()
      return res.send(response)
    }
    if (req.method === 'GET') {
      const data = await ProductModel.find({})
      return res.send(data)
    }
    res.status(500).json({ message: 'error en el servidor' })
  } catch (err) {
    console.error('error en api/products', err)
    res.status(500).json({ error: err.message })
  }
}
