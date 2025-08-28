import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    //xử lí logic dữ liệu tuỳ đặc thù dự án
    const newBoard = { ...reqBody, slug: slugify(reqBody.title) }
    //gọi tới tầng Model để xử lí lưu bản ghi newBoard vào DB
    //...

    //làm thêm các xử lí logic khác với các collection khác tuỳ đặc thù dự án,...
    //bắn email, thông báo về admin khi có board mới được tạo,...

    //trả về kết quả, Service luôn phải có Return
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
}
