var statham = require('statham'),
    path = require('path'),
    addEventListener = function(){},
    originalWindow = typeof window !== 'undefined' ? window : undefined,
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
    GLOBAL.document = originalWindow ? originalWindow.document : undefined;

    return statham.stringify(view);
}

module.exports = buildPage;