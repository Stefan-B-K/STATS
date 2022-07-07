export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

export type MatchInfo = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
]