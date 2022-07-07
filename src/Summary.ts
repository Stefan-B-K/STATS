import { MatchInfo } from "./MatchResult";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReporter } from "./reporter/HtmlReporter";

export interface Analyzer {
    run (matches: MatchInfo[]): string
}

export interface Reporter {
    output (report: string): void
}

export class Summary {
    static winsToHtml(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReporter(`${teamName.split(' ').join('')}-Wins`)
        )
    }

    constructor (
        public analyzer: Analyzer,
        public reporter: Reporter) {}
    generateReport(matches: MatchInfo[]): void {
        const report = this.analyzer.run(matches)
        this.reporter.output(report)
    }
}

