
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv')
reader.read()

const teamName = 'Man United'
let teamWins = 0

for (let match of reader.data) {
    if ((match[1] === teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === teamName && match[5] === MatchResult.AwayWin)) {
        teamWins++
    }
}

// console.log(`"${teamName}" won ${teamWins} games`)
const date = new Date('27-10-2018')
console.log(date)
