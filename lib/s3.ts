import AWS from 'aws-sdk';

if (
    !process.env.AWS_ACCESS_KEY_ID ||
    !process.env.AWS_SECRET_ACCESS_KEY ||
    !process.env.AWS_REGION ||
    !process.env.S3_BUCKET_NAME
) {
    throw new Error('AWS credentials or bucket name not found in environment variables');
}

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();
const bucketName = process.env.S3_BUCKET_NAME;

// Function to check if bucket exists
export const checkBucketExists = async (): Promise<boolean> => {
    try {
        await s3.headBucket({ Bucket: bucketName }).promise();
        return true;
    } catch (error: any) {
        if (error.code === '404') {
            console.error(
                `Bucket '${bucketName}' does not exist in region '${process.env.AWS_REGION}'`,
            );
            return false;
        }
        if (error.code === '403') {
            console.error(
                `Access denied to bucket '${bucketName}'. Please check your AWS credentials and permissions.`,
            );
            return false;
        }
        throw error;
    }
};

export const uploadFileToS3 = async (file: File): Promise<string> => {
    // First check if bucket exists
    const bucketExists = await checkBucketExists();
    if (!bucketExists) {
        throw new Error(
            `Cannot upload file: Bucket '${bucketName}' does not exist or is not accessible`,
        );
    }

    const fileBuffer = await file.arrayBuffer();
    const params = {
        Bucket: bucketName,
        Key: `receipts/${Date.now()}-${file.name}`,
        Body: Buffer.from(fileBuffer),
        ContentType: file.type,
    };

    try {
        const data = await s3.upload(params).promise();
        return data.Location;
    } catch (error: any) {
        if (error.code === 'NoSuchBucket') {
            throw new Error(
                `Bucket '${bucketName}' does not exist in region '${process.env.AWS_REGION}'`,
            );
        }
        if (error.code === 'AccessDenied') {
            throw new Error(
                `Access denied to bucket '${bucketName}'. Please check your AWS credentials and permissions.`,
            );
        }
        if (error.code === 'InvalidAccessKeyId') {
            throw new Error('Invalid AWS Access Key ID. Please check your AWS credentials.');
        }
        if (error.code === 'SignatureDoesNotMatch') {
            throw new Error('Invalid AWS Secret Access Key. Please check your AWS credentials.');
        }
        console.error('Error uploading file to S3:', error);
        throw new Error(`Failed to upload file to S3: ${error.message}`);
    }
};
