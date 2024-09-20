const AWS = require('aws-sdk');
const StorageInterface = require('./storageInterface');

class S3Storage extends StorageInterface {
    constructor(config) {
        super();
        this.s3 = new AWS.S3(config);
    }

    async upload(file, options) {
        const params = {
            Bucket: options.bucketName,
            Key: options.key,
            Body: file
        };
        return this.s3.upload(params).promise();
    }

    async download(filePath, options) {
        const params = {
            Bucket: options.bucketName,
            Key: filePath
        };
        return this.s3.getObject(params).promise();
    }

    async delete(filePath, options) {
        const params = {
            Bucket: options.bucketName,
            Key: filePath
        };
        return this.s3.deleteObject(params).promise();
    }
}

module.exports = S3Storage;
