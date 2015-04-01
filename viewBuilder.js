var browserify = require('browserify'),
    statham = require('statham'),
    buildView = require('./buildView');

function buildViews(viewPaths, callback){

    var b = browserify();

    viewPaths.forEach(function(viewPath) {
        b.add(viewPath);
    });

    b.bundle(function(error, data){
        if(error){
            return callback(error);
        }

        var pageIds = /\[(.*?)]\)$/g.exec(data)[1].split(','),
            exports = buildView(data);

        var views = pageIds.map(function(id, index){
            return {
                sourcePath: viewPaths[index],
                result: statham.stringify(exports(id)())
            };
        });

        callback(null, views);
    });
}

module.exports = buildViews;