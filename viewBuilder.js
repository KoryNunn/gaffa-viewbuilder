var statham = require('statham'),
    path = require('path'),
    addEventListener = function(){},
    originalWindow = GLOBAL.window,
    originalDocument = GLOBAL.document,
    fakeWindow = {
        addEventListener: addEventListener,
        document: {
            addEventListener: addEventListener
        }
    };

function buildPage(viewPath){

    GLOBAL.window = fakeWindow;
    GLOBAL.document = fakeWindow.document;

    var view = require(path.join(process.cwd(), viewPath))();

    console.log('built ' + viewPath.split('/').pop());

    GLOBAL.window = originalWindow;
    GLOBAL.document = originalDocument;

    return statham.stringify(view);
}

module.exports = buildPage;