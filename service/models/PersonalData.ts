export class PersonalData {
    public name: string;
    public surname: string; 
    public middlename: string; 
    public phoneNumber: string; 
    public email: string;
    
    constructor() {
        this.name = '';
        this.surname = '';
        this.middlename = '';
        this.phoneNumber = '';
        this.email = '';
    }

    public validateData(): boolean {
        if(this.name && this.surname && this.middlename && this.phoneNumber && this.email) {
            return true;
        }
        return false;
    }
}