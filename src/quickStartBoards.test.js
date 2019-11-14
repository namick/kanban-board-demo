import quickStartBoards from './quickStartBoards'

it('creates valid initial data', () => {
  expect(quickStartBoards()).toEqual({
    boards: {
      board1: {
        id: 'board1',
        title: 'Example Board One',
        columns: {
          column0: {
            id: 'column0',
            name: 'Column 0',
            cards: {
              card0: { id: 'card0', text: 'This is example card 0' },
              card1: { id: 'card1', text: 'This is example card 1' },
              card2: { id: 'card2', text: 'This is example card 2' },
            },
            cardOrder: ['card0', 'card1', 'card2'],
          },
          column1: {
            id: 'column1',
            name: 'Column 1',
            cards: {
              card3: { id: 'card3', text: 'This is example card 3' },
              card4: { id: 'card4', text: 'This is example card 4' },
              card5: { id: 'card5', text: 'This is example card 5' },
            },
            cardOrder: ['card3', 'card4', 'card5'],
          },
          column2: {
            id: 'column2',
            name: 'Column 2',
            cards: {
              card6: { id: 'card6', text: 'This is example card 6' },
              card7: { id: 'card7', text: 'This is example card 7' },
              card8: { id: 'card8', text: 'This is example card 8' },
            },
            cardOrder: ['card6', 'card7', 'card8'],
          },
        },
        columnOrder: ['column0', 'column1', 'column2'],
      },
      board2: {
        id: 'board2',
        title: 'Example Board Two',
        columns: {
          column3: {
            id: 'column3',
            name: 'Column 3',
            cards: {
              card9: { id: 'card9', text: 'This is example card 9' },
              card10: { id: 'card10', text: 'This is example card 10' },
              card11: { id: 'card11', text: 'This is example card 11' },
            },
            cardOrder: ['card9', 'card10', 'card11'],
          },
          column4: {
            id: 'column4',
            name: 'Column 4',
            cards: {
              card12: { id: 'card12', text: 'This is example card 12' },
              card13: { id: 'card13', text: 'This is example card 13' },
              card14: { id: 'card14', text: 'This is example card 14' },
            },
            cardOrder: ['card12', 'card13', 'card14'],
          },
          column5: {
            id: 'column5',
            name: 'Column 5',
            cards: {
              card15: { id: 'card15', text: 'This is example card 15' },
              card16: { id: 'card16', text: 'This is example card 16' },
              card17: { id: 'card17', text: 'This is example card 17' },
            },
            cardOrder: ['card15', 'card16', 'card17'],
          },
        },
        columnOrder: ['column3', 'column4', 'column5'],
      },
    },
    boardOrder: ['board1', 'board2'],
  })
})
