import initialData from './initialData'

export const setBoards = data => localStorage.setItem('KanBanBoards', JSON.stringify(data))

export const getBoards = () => {
  let data = JSON.parse(localStorage.getItem('KanBanBoards'))

  if (!data) {
    data = initialData()
    setBoards(data)
  }

  return data
}
