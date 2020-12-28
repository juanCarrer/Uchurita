import connect from '../../../mongoBD/connect'
import ProductModel from '../../../mongoBD/ProductModel'

const mongoURL = process.env.DB_MONGO_URL

export default async function getProductsById (req, res) {
  connect(mongoURL)
  if (req.method !== 'GET') {
    res.status(400).json({ message: 'get method not supported' })
  }
  try {
    const data = await ProductModel.findOne({ _id: req.query.id })
    res.json(data)
  } catch (err) {
    console.error('error en proderror en api/products/id', err)
    res.status(500).json({ error: err.message })
  }
}
