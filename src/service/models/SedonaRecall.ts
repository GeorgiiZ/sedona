export class SedonaRecall{

    public impression: string;
    public impressionDesc: string;
    public visitedSights: string [];

    constructor(){
        this.impression = '';
        this.impressionDesc = '';
        this.visitedSights = <string[]>[];
    }

    public validateData(): boolean {
        if(this.impression && this.impressionDesc && this.visitedSights && this.visitedSights.length) {
            return true;
        }
        return false;
    }
}