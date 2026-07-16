import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
	NodeOperationError,
} from 'n8n-workflow';

export class Ombi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ombi',
		name: 'ombi',
		icon: { light: 'file:ombi.svg', dark: 'file:ombi.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Query your Ombi media request manager through its API',
		defaults: { name: 'Ombi' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'ombiApi', required: true }],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Get Movie Requests', value: 'getMovieRequests', action: 'Get many movie requests' },
					{ name: 'Get Status', value: 'getStatus', action: 'Get the server status' },
					{ name: 'Get TV Requests', value: 'getTvRequests', action: 'Get many TV requests' },
				],
				default: 'getStatus',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const URL_BY_OP: Record<string, string> = {
			getMovieRequests: '/api/v1/Request/movie',
			getStatus: '/api/v1/Status',
			getTvRequests: '/api/v1/Request/tv',
		};

		for (let i = 0; i < items.length; i++) {
			try {
				const credentials = await this.getCredentials('ombiApi', i);
				const baseURL = (credentials.baseUrl as string).replace(/\/+$/, '');
				const operation = this.getNodeParameter('operation', i) as string;

				const url = URL_BY_OP[operation];
				if (!url) {
					throw new NodeOperationError(this.getNode(), `Unsupported operation: ${operation}`, {
						itemIndex: i,
					});
				}

				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'ombiApi', {
					method: 'GET' as IHttpRequestMethods,
					baseURL,
					url,
					json: true,
				} as IHttpRequestOptions);

				if (Array.isArray(response)) {
					for (const element of response) {
						returnData.push({ json: element as IDataObject, pairedItem: { item: i } });
					}
				} else {
					returnData.push({ json: response as IDataObject, pairedItem: { item: i } });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message }, pairedItem: { item: i } });
					continue;
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
			}
		}

		return [returnData];
	}
}
