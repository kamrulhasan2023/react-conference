export interface IConference{
    id ? : string | number,
    title: string;
    description:string;
    startDate: string;
    count:number,
    isLastItem? : boolean;
}