var addEventListener = function(){},
    window = {
        addEventListener: addEventListener,
        document: {
            addEventListener: addEventListener
        }
    },
    document = window.document;

module.exports = function buildView(data){
    return eval(data);
};