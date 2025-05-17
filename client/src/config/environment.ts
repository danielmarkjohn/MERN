// Environment configuration
interface EnvironmentConfig {
  apiUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

// Default values as fallbacks
const defaultConfig: EnvironmentConfig = {
  apiUrl: 'http://localhost:5000/graphql',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

// Create the environment configuration
const environment: EnvironmentConfig = {
  apiUrl: process.env.REACT_APP_API_URL || defaultConfig.apiUrl,
  isDevelopment: defaultConfig.isDevelopment,
  isProduction: defaultConfig.isProduction
};

export default environment;
