export interface ISponsors {
	title : string,
	sponsors : Array<{
		sponsorType : string,
		sponsorsLogo: Array<{
			logo: string
		}>
	}>
}