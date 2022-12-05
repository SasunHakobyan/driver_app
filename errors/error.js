const serverErrorResponse = {
    responseCode: 500,
    errorMessage: 'Server Error',
    data: null
};

const notFoundErrorResponse = {
    responseCode: 404,
    errorMessage: 'Requested Data not found',
    data: null
};

module.exports = {
    serverErrorResponse,
    notFoundErrorResponse
};