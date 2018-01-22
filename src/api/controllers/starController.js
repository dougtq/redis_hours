import { Router } from 'express'

import { getTotalStars } from './../services/starService' 

const router = Router()

router.get('/:username', (req, res, next) => {
  const { username } = req.params
  getTotalStars(username)
    .then((data) => res.send(data))
    .catch((err) => res.send(err).status(err.code))
})

export default router
