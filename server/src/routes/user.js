import { Router } from 'express'
const router = Router()
router.get('/user', (req, res) => {
  res.send('user test success')
})

export default router
