const selectButton = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    
    {
        name: 'scissors',
        beats: 'paper'
    },
    
    {
        name: 'paper',
        beats: 'rock'
    }
]

selectButton.forEach(selectButton => {
    selectButton.addEventListener('click', e => {
       const selectionName = selectButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})
function makeSelection(selection){
    const computerChoice = computerPlay()
    const yourWinner = isWinner(selection, computerChoice)
    const computerWinner = isWinner(computerChoice, selection)
    addSelectionResult(computerChoice, computerWinner)
    addSelectionResult(selection, yourWinner)
}
function addSelectionResult(selection, winner){

}

function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name
}

function computerPlay(){
    let choiceNum = Math.floor(Math.random() * SELECTIONS.length)
return SELECTIONS[choiceNum]}
