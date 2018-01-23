let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	kinesis.putRecord({
		Data: 'sample',
		PartitionKey: '12345',
		StreamName: 'kinesis-sample-stream'
	}).promise()
		.then(putRecordData => {
			// your logic goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}