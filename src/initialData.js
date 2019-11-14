export const boardTitles = ['Example Board', 'A Second Board']

export const columnNames = ['Requested', 'In Progress', 'Verified', 'Completed']

export const cardTexts = () =>
  [
    'Everyone needs a little inspiration.',
    'Be yourself; everyone else is already taken.',
    'So many books, so little time.',
    "You've gotta dance like there's nobody watching",
    'Be the change that you wish to see in the world.',
    'No one can make you feel inferior.',
    "If you tell the truth, you don't have to remember anything.",
    'Imperfection is beauty, madness is genius.',
    "I don't think I know, I only know I think.",
    'Yesterday is history',
    'Tomorrow is a mystery',
    'Fairy tales are more than true',
    'Dragons can be beaten.',
  ]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
