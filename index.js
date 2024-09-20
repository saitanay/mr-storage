const config = require('./config');
const S3Storage = require('./s3Storage');
const MinioStorage = require('./minioStorage');

let storageInstance;

if (config.storageProvider === 's3') {
    storageInstance = new S3Storage(config.s3);
} else if (config.storageProvider === 'minio') {
    storageInstance = new MinioStorage(config.minio);
} else {
    throw new Error('Unsupported storage provider');
}

module.exports = storageInstance;
