export interface IConferences  {
    title : string;
    conferences :Array<{
        id: string | number;
        title: string;
        description:string;
        startDate: string;
        isAlter: boolean;
        isLastItem? : boolean;
    }>;
}