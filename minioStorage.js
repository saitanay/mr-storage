const Minio = require('minio');
const StorageInterface = require('./storageInterface');

class MinioStorage extends StorageInterface {
    constructor(config) {
        super();
        this.minioClient = new Minio.Client(config);
    }

    async upload(file, options) {
        return new Promise((resolve, reject) => {
            this.minioClient.putObject(options.bucketName, options.key, file, (err, etag) => {
                if (err) return reject(err);
                resolve(etag);
            });
        });
    }

    async download(filePath, options) {
        return new Promise((resolve, reject) => {
            this.minioClient.getObject(options.bucketName, filePath, (err, dataStream) => {
                if (err) return reject(err);
                resolve(dataStream);
            });
        });
    }

    async delete(filePath, options) {
        return new Promise((resolve, reject) => {
            this.minioClient.removeObject(options.bucketName, filePath, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
}

module.exports = MinioStorage;
