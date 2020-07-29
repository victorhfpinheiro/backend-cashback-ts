import { Router } from 'express'
import DealerController from '@controllers/dealer.controller'
import PurchaseController from '@controllers/purchase.controller'
import CashbackController from '@controllers/cashback.controller'
import AuthenticateController from '@controllers/authenticate.controller'
import DealerValidator from '@validators/dealer.validator'
import PurchaseValidator from '@validators/purchase.validator'
import CashBackValidator from '@validators/cashback.validator'
import AuthenticateValidator from '@validators/authenticate.validator'
import Auth from '@middlewares/authenticate.middleware'

const routes = Router()

routes.post('/dealer', DealerValidator.create, DealerController.create)
routes.post('/authenticate', AuthenticateValidator.authenticate, AuthenticateController.authenticate)

routes.get('/purchase', PurchaseValidator.index, Auth.validateJwt, PurchaseController.index)
routes.post('/purchase', PurchaseValidator.create, Auth.validateJwt, PurchaseController.create)

routes.get('/cashback', CashBackValidator.cashback, Auth.validateJwt, CashbackController.cashback)

export default routes
