
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        serviceAccount: env("GCS_SERVICE_ACCOUNT"),
        bucketName: env('GOOGLE_STORAGE_BUCKETNAME'),
      },
    },
  },
});
