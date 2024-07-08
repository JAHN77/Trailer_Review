
const config = {
    apiKey: import.meta.env.VITE_API_KEY,
    tokenApi: import.meta.env.VITE_TOKEN_API,
};

if (!config.apiKey || !config.tokenApi) {
    throw new Error('Missing environment variables');
}

export default config;
