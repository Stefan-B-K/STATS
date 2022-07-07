import { CsvFileReader } from "./CsvFileReader";
import { stringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

type MatchInfo = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<MatchInfo> {

    mapRow (row: string[]): MatchInfo {
        return [
            stringToDate(row[0], '/'),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}