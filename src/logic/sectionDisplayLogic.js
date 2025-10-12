export const CONTACTINFO = {
    firstName:'',
    middleInitial:'',
    LastName:'',
    emailAddress:'',
    phoneNumber:'',
    address: {
        streetAddress:'',
        city:'',
        state:'',
        zipCode:''
    }
}

export const jobArray = [];

export class JobObject {
    constructor(name,title,startMonth,startYear,endMonth,endYear,description) {
        this.name = name;
        this.title = title;
        this.startDate = `${startMonth}, ${startYear}`;
        this.endDate = `${endMonth}, ${endYear}`
        this.description = description;
    }
}