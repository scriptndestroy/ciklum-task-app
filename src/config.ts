import loc from './config.loc'; 
import dev from './config.dev';
import prod from './config.pro'; 

const config = process.env.NODE_ENV === 'production' ? prod : (process.env.NODE_ENV === 'development' ? dev : loc);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...config,  
    VERSION:"v 0.190621" // mm/dd/hh
};
