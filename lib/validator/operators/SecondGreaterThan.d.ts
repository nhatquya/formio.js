export class SecondGreaterThanOperator extends DateGreaterThanOperator {
    static get presetArguments(): {
        granularity: {
            valueSource: string;
            stringInput: string;
        };
    };
    constructor(context?: {});
}
import { DateGreaterThanOperator } from "./DateGreaterThan";
