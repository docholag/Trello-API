import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newBoard = { ...reqBody, slug: slugify(reqBody.title) }
    //Gọi tới tầng Model để xử lí lưu bản ghi newBoard vào DB
    const createdBoard = await boardModel.createNew(newBoard)

    //Lấy bản ghi vừa tạo
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    console.log('Found board: ', getNewBoard)

    //Service luôn phải có Return
    return getNewBoard
  } catch (error) {
    throw new Error(error)
  }
}

const getDetail = async (boardId) => {
  try {
    const board = await boardModel.getDetail(boardId)
    if (!board) throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found')

    return board
  } catch (error) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew,
  getDetail,
}
