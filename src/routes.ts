import { Router } from 'express'
import dealerController from '@controllers/dealer.controller'
import purchaseController from '@controllers/purchase.controller'
import cashbackController from '@controllers/cashback.controller'
import authenticateController from '@controllers/authenticate.controller'

const routes = Router()

routes.post('/dealer', dealerController.create)
routes.post('/authenticate', authenticateController.authenticate)

routes.get('/purchase', purchaseController.index)
routes.post('/purchase', purchaseController.create)

routes.get('/cashback', cashbackController.total)

export default routes
