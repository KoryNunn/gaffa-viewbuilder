# gaffa-pagebuilder

## What

Build's gaffa pages into json

## Why

Often it's a good idea to break up your gaffa application into pages, that you load as required.

## How

gaffa page modules need to conform to a certain pattern to with with this builder:

    // They must export a function that optionally takes app as its first parameter

    module.exports = function(app){
        // the app arument is usefull for passing things like viewItem constructors around in.
        // you could also just require the viewItem constructors you need, if you prefer.

        var views = app.views,
            actions = app.actions,
            behaviours = app.behaviours;

        function createSomePage(){
            var somePage = new views.container();

            return somePage;
        }

        // a page module must return a single gaffa view.
        return createHomePage();
    };

Pass the path to the app module, and the page module into pagebuilder and it will return a statham stringified JSON string.

You can then gaffa.navigate to this .json file, and you will get the views in your application.