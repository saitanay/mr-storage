# Example Usage in any nodejs code

```
// In your Node.js app
const storage = require('mr-storage');

// Uploading a file
const file = Buffer.from('Hello, world!');
const options = {
    bucketName: 'my-bucket',
    key: 'hello.txt'
};

storage.upload(file, options)
    .then(result => {
        console.log('File uploaded successfully:', result);
    })
    .catch(err => {
        console.error('Error uploading file:', err);
    });

// Downloading a file
const filePath = 'hello.txt';
storage.download(filePath, { bucketName: 'my-bucket' })
    .then(fileData => {
        console.log('File downloaded successfully:', fileData);
    })
    .catch(err => {
        console.error('Error downloading file:', err);
    });

// Deleting a file
storage.delete(filePath, { bucketName: 'my-bucket' })
    .then(() => {
        console.log('File deleted successfully');
    })
    .catch(err => {
        console.error('Error deleting file:', err);
    });
```
