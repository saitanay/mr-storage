class StorageInterface {
    async upload(file, options) {
        throw new Error("Method 'upload' must be implemented");
    }

    async download(filePath, options) {
        throw new Error("Method 'download' must be implemented");
    }

    async delete(filePath, options) {
        throw new Error("Method 'delete' must be implemented");
    }
}

module.exports = StorageInterface;
