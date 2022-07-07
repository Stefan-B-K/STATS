// import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReporter } from "./reporter/ConsoleReporter";
// import { HtmlReporter } from "./reporter/HtmlReporter";

// const reader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(reader)
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     // new ConsoleReporter()
//     new HtmlReporter('ManchesterWIns')
// )

// summary.generateReport(matchReader.matches)
Summary.winsToHtml('Man United')
    .generateReport(matchReader.matches)


