import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError.js'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    //đoạn này điều hướng dữ liệu sang tầng Service
    const createdBoard = await boardService.createNew(req.body)
    //có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

const getDetail = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const board = await boardService.getDetail(boardId)

    res.status(StatusCodes.OK).json(board)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetail,
}
