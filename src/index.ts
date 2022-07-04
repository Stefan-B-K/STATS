
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader('football.csv')
reader.read()

const teamName = 'Man United'
let teamWins = 0

for (let match of reader.data) {
    if ((match[1] === teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === teamName && match[5] === MatchResult.AwayWin)) {
        teamWins++
    }
}

console.log(`"${teamName}" won ${teamWins} games`)


