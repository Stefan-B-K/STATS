import { Analyzer } from "../Summary";
import { MatchInfo, MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor (public teamName: string) {}

    run (matches: MatchInfo[]): string {
        let teamWins = 0

        for (let match of matches) {
            if ((match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
                (match[2] === this.teamName && match[5] === MatchResult.AwayWin)) {
                teamWins++
            }
        }
        return `"${this.teamName}" won ${teamWins} games`
    }
}