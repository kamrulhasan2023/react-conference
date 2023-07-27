export interface IConference{
    id ? : string | number,
    name: string;
    slogan:string;
    startDate: string;
    count:number,
    isLastItem? : boolean;
}