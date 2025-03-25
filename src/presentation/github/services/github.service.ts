import { GithubIssuePayload, GithubStarPayload } from "../../../interfaces";

export class GithubService {

	constructor() {}

	onStart( payload: GithubStarPayload): string {
		let message: string = '';

		const { action, sender, repository } = payload;

		return message = `User ${ sender.login } ${ action } star on ${ repository.full_name }`;
	}

	onIssue( payload: GithubIssuePayload): string {
		let message: string = '';

		const { action, issue, } = payload;

		if ( action === 'opened' ) {
			return `An issue was opened with this title ${ issue.title }`;
		}

		if ( action === 'closed' ) {
			return  `An issue was close by ${ issue.user.login} `;
		}

		if ( action === 'reopened' ) {
			return `An issue was reopened by ${ issue.user.login} `;
		}
		
		return `Unhandled actioon for the issue event ${ action }`;
	}	
}