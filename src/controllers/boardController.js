import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    //đoạn này điều hướng dữ liệu sang tầng Service

    //có kết quả thì trả về phía Client
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POST: Create a new board from validation' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message })
  }
}

export const boardController = {
  createNew,
}
