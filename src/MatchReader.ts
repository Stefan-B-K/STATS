import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

interface DataReader {
    data: string[][]
    read (): void
}

type MatchInfo = [Date, string, string, number, number, MatchResult, string]

export class MatchReader {
    matches: MatchInfo[] = []
    constructor (public reader: DataReader) {}

    load (): void {
        this.reader.read()
        this.matches = this.reader.data.map(
            (row: string[]): MatchInfo => {
                return [
                    stringToDate(row[0], '/'),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ]
            })
    }
}