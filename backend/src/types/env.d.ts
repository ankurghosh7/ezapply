declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGODB_CLUSTER_NAME: string;
            MONGODB_DBNAME: string;
            MONGODB_USERNAME: string;
            MONGODB_PASSWORD: string;
            MONGODB_URI: string;
            PORT: number;
            APP_URL: string;
            ACCESS_TOKEN_SECRET: string;
            ACCESS_TOKEN_TIME: string;
            REFRESH_TOKEN_SECRET: string;
            REFRESH_TOKEN_TIME: string;
            FORGOT_PASSWORD_SECRET: string;
            CLOUDINARY_CLOUD_NAME: string;
            CLOUDINARY_API_KEY: string;
            CLOUDINARY_API_SECRET: string;
            CLOUDINARY_URL: string;
            CORS_ORIGIN: any;
            ENV: "test" | "dev" | "prod";
        }
    }
}

export {};
