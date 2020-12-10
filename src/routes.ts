import { Router } from "express"
import { createTussController } from "./useCases/CreateTuss"
import { findTussController } from "./useCases/FindTuss"

const router = Router()
router.get('/', (req, res) => {
  return res.redirect('https://tuss-doc.000webhostapp.com/')
})

router.post('/tuss', (req, res) => {
  return createTussController.handle(req, res)
})

router.get('/tuss/paginate/', (req, res) => {
  return findTussController.findAll(req, res)
})

router.get('/tuss/:code', (req, res) => {
  return findTussController.findByCode(req, res)
})


export { router }