import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export const getResumeUrl = async (key) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
    };

    const url = await getSignedUrl(s3Client, new GetObjectCommand(params), { expiresIn: 3600 });

    return url;
};

export const uploadResume = async (file) => {
    const params = {
        Bucket: "jobsearchmate-user-resumes",// process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
    };

    await s3Client.send(new PutObjectCommand(params));
}

// test the connection

// const getResumeUrlTest = async () => {
//     const url = await getResumeUrl('Basavaraj_Patil_Resume.pdf');
//     console.log(`Resume URL: ${url}`);
// }

// getResumeUrlTest();