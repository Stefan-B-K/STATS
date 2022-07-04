import fs from "fs";
import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchInfo = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
    data: MatchInfo[] = []
    constructor (public fileName: string) {
    }
    read (): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map((row: string[]): MatchInfo => {
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