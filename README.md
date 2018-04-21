# Framer Build Tool

With this build tool, you can develop Framer Generator exported prototypes with modular JavaScript, the latest ES6-Features like named imports/exports, npm packages and a development server with hot reloading capabilities.

# How to start

1.  Clone this repo `$ git clone https://github.com/switchnollie/FramerBuildTool.git`
2.  Run `$ npm install` inside the directory

## How to develop

1.  Develop your prototype in Sketch/ Figma/ Photoshop inside the `/framerPrototype` folder
2.  Use [Framer Generator](https://github.com/koenbok/Framer) to generate a `.framer` directory from your design.
3.  start with `$ npm run start`

## How to use it with Framer

The `Framer` Object, and all of the API (the `Animation` object, the `Layer` object etc.) are expsed globally. Please refer to the [Framer API Documentation](https://framer.com/docs/). Your imported layers and groups are saved under the global `myLayers` object variable.

1.  Choose your deviceType from [here](https://framer.com/docs/#device.deviceType)
2.  Copy it to `src/device.js`

e.g.

```js
device.deviceType = "apple-iphone-7-silver";
```

3.  Access your layers and groups as properties on the `myLayers` object variable and give them state, animations, touchHandlers etc.

## How to deploy

Your project can be bundled with `$ npm run build`. The static bundle can then be found under the `dist` folder.

## Installing and using dependencies

* e.g. Redux: `$ npm install -S redux`
* in `src` e.g. in app.js:

```js
import { createStore } from "redux";
```

## Using stylesheets in your project

* create a stylesheet in the `src` folder e.g. `app.css`
* import it in your JavaScript e.g. in app.js:

```js
import "app.css";
```

## Using static files (Images/ Fonts/ ...) in your project

* e.g. images: Save the file under `src` e.g. `src/img/myPicture.png`

```js
import picture from "img/myPicture.png";

sketch.myLayer1.states = {
  withPicture: {
    image: picture
  }
```
