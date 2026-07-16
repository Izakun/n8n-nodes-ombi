import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OmbiApi implements ICredentialType {
	name = 'ombiApi';

	displayName = 'Ombi API';

	icon = 'file:ombiApi.svg' as const;

	documentationUrl = 'https://docs.ombi.app/';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://ombi:3579',
			required: true,
			description: 'Base URL of the Ombi instance (e.g. http://ombi:3579). No trailing slash.',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Ombi API key (Settings → Configuration → General → API Key)',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				ApiKey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/v1/Status',
		},
	};
}
