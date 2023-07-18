const dynamoose = require('dynamoose');





const connect = () => {

    // // Create new DynamoDB instance
    // const ddb = new dynamoose.aws.ddb.DynamoDB({
    //     "credentials": {
    //         "accessKeyId": "AKID",
    //         "secretAccessKey": "SECRET"
    //     },
    //     "region": "us-east-1"
    // });

    // // Set DynamoDB instance to the Dynamoose DDB instance
    // dynamoose.aws.ddb.set(ddb);

    dynamoose.aws.ddb.local();
}

module.exports = {
    connect
}