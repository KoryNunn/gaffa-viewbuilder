# gaffa-viewBuilder

## What

Build's gaffa pages into json

## Warning

This module temporarily sets GLOBAL.window to an object.

After it has built the view, it will reset GLOBAL.window to whatever it was before.

## Why

Often it's a good idea to break up your gaffa application into lazy loadable chunks.

## How

Gaffa view builder modules need to conform to a certain pattern to work with this builder.

They must export a function that returns either a Gaffa viewItem, or a gaffa 'page' object.

    module.exports = function(){

        ...

        function createSomePage(){
            var somePage = new Container();

            return somePage;
        }

        // return the desired structure.
        return {
            views: [createHomePage()]
        };
    };

Pass an array of paths to your views to gaffa-viewbuilder to build:

    fs.readdir('./views', function(error, files){

        var paths = files.map(function(file) {
            return './views/' + file;
        });

        viewBuilder(paths, function(views){

            /*
                Views will be an array of objects, eg:

                {
                    sourcePath: original path,
                    result: the resultant JSON, serialised with statham
                }

            */

        });
    });