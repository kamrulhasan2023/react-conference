export interface IConferences  {
    title : string;
    conferences :Array<{
        id: string | number;
        name: string;
        slogan:string;
        startDate: string;
    }>;
}