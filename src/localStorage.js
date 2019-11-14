import quickStartBoards from './quickStartBoards'

export const setBoards = data => localStorage.setItem('KanBanBoards', JSON.stringify(data))

export const getBoards = () => {
  let data = JSON.parse(localStorage.getItem('KanBanBoards'))

  if (!data) {
    data = quickStartBoards()
    setBoards(data)
  }

  return data
}
