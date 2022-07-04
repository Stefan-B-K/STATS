import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";


const reader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(reader)
matchReader.load()

const teamName = 'Man United'
let teamWins = 0

for (let match of matchReader.matches) {
    if ((match[1] === teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === teamName && match[5] === MatchResult.AwayWin)) {
        teamWins++
    }
}

console.log(`"${teamName}" won ${teamWins} games`)


