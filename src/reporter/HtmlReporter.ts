import { Reporter } from "../Summary";
import fs from "fs";

export class HtmlReporter implements Reporter {
    constructor (public fileName: string) {}
    output (report: string): void {
        const html = `
             <div>
                    <h1>Analysis Output</h1>
                    <div>${report}</div>
            </div>
        `
        fs.writeFileSync(`${this.fileName}.html`, html)
    }

}