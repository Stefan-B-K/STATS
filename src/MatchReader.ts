import { stringToDate } from "./utils";
import { MatchResult, MatchInfo } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
    data: string[][]
    read (): void
}

export class MatchReader {
    matches: MatchInfo[] = []
    constructor (public reader: DataReader) {}

    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename))
    }

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