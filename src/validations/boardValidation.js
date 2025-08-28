import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

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
    const errorMessage = new Error(error).message
    const customMessage = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    )
    next(customMessage)
  }
}

export const boardValidation = {
  createNew,
}
