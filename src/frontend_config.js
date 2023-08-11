var configs = {
    //backendurl : 'buypotato-backend',
    backendPort : process.env.BACKEND_PORT || 7200,
    backendUrl : process.env.BACKEND_URL || '192.168.2.170'
};
module.exports = {configs};