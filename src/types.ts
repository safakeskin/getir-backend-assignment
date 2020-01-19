import Errors from "./Errors";
const {MissingFieldError} = Errors;

interface HandlerArg {
    body: any;
    headers: any;
    params: any;
}

class Body{
    fields: string[];
    validate = function(){
        for(let idx = 0; idx < this.fields.length; idx++ ){
            if( this[this.fields[idx]] == null ){
                const message = `${this.fields[idx]} field is missing`;
                throw new MissingFieldError(message);
            }
        }
    };
}

const FIND_BETWEEN_FIELDS = ["startDate", "endDate", "minCount", "maxCount"];

class FindBetweenBody extends Body{
    startDate: string;
    endDate: string;
    minCount: number;
    maxCount: number;
    constructor(data: any){
        super();
        this.fields = FIND_BETWEEN_FIELDS;
        this.fields.forEach(field => {
            this[field] = data[field];
        });
    }
}

export {
    HandlerArg,
    FindBetweenBody
}