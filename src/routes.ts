import { Router } from 'express'
import DealerController from '@controllers/dealer.controller'
import PurchaseController from '@controllers/purchase.controller'
import CashbackController from '@controllers/cashback.controller'
import AuthenticateController from '@controllers/authenticate.controller'
import { celebrate } from 'celebrate'
import { DealerValidator } from '@validators/dealer.validator'
import { AuthenticateValidator } from '@validators/authenticate.validator'
import { PurchaseValidator } from '@validators/purchase.validator'
import Auth from '@middlewares/authenticate.middleware'

const routes = Router()

routes.post('/dealer', celebrate(DealerValidator.create), DealerController.create)
routes.post('/authenticate', celebrate(AuthenticateValidator.authenticate), AuthenticateController.authenticate)

routes.get('/purchase', celebrate(PurchaseValidator.index), PurchaseController.index)
routes.post('/purchase', celebrate(PurchaseValidator.create), Auth.validateJwt, PurchaseController.create)

routes.get('/cashback', CashbackController.total)

export default routes
