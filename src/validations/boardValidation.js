import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(100).required().trim().strict(),
    description: Joi.string().max(500).optional().trim().strict(),
  })

  try {
    //abortEarly: false trường hợp nhiều lỗi validation thì trả về tất cả
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    //validation thành công thì cho next() đi tiếp sang Controller
    next()
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: error.message })
  }
}

export const boardValidation = {
  createNew,
}
