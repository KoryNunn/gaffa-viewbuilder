# gaffa-viewBuilder

## What

Build's gaffa pages into json

## Warning

This module temporarily sets GLOBAL.window to an object.

After it has built the view, it will reset GLOBAL.window to whatever it was before.

## Why

Often it's a good idea to break up your gaffa application into lazy loadable chunks.

## How

Gaffa view creator modules need to conform to a certain pattern to work with this builder.

They must export a function that returns either a Gaffa viewItem, or a gaffa 'page' object.

    module.exports = function(){
        // Let's assume you have an app object that already has
        // all your views, actions, and behaviours on it.
        var app = require('../app'),
            views = app.views,
            actions = app.actions,
            behaviours = app.behaviours;

        function createSomePage(){
            var somePage = new views.Container();

            return somePage;
        }

        // return the desired structure.
        // the below is an appropriate 'page' structure.
        // This is something that gaffa would expect to navigate to.
        return {
            views: [createHomePage()]
        };
    };

Pass the above page module into pagebuilder and it will return a statham stringified JSON string.

You can also just serialise viewItems, instead of whole pages. just return the viewItem:

    ...

    return createSomeView();