import { Reporter } from "../Summary";

export class ConsoleReporter implements Reporter {
    output (report: string): void {
        console.log(report)
    }
}