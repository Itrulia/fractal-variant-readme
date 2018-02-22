# @itrulia/fractal-variant-readme
> Fractal plugin that allows you to create readmes for your variants.

This [Fractal](http://fractal.build/) plugin allows you to create your own `readme.md` files powered by [marked](https://github.com/markedjs/marked) for variants and display them in your design system.

> Please note that this plugin only works for fractal v2!

## Installing / Getting started

To install it you need to require it like this:

```shell
npm install --save @itrulia/fractal-variant-readme
```

This will add the @itrulia/fractal-variant-readme dependency in to your package.json.

Now you can add it to your `fractal.config.js` like this:

```javascript
app: {
    ...
    plugins: [
        ["@itrulia/fractal-variant-readme", {
            gfm: true,
            // or more marked options
        }]
    ]
},
```

In your component directory you can now create new readme files with the following syntax: `readme--VARIANT_ID.md`. e.g.: `readme--primary.md`.


In your `_component.njk` you can now have access to `variant.readme` like this:

```njk
{% if variant.readme %}
    <h3 class="variant__sectionTitle">
        Description
    </h3>

    <div class="variant__readme">
        {{ variant.readme | safe }}
    </div>
{% endif %}
```

inside the variants loop.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/Itrulia/fractal-variant-readme
cd fractal-variant-readme/
npm install
```

This will download all dependencies so that you are ready to go.

### Deploying / Publishing

You will need to publish this to the github and npm repository.

To do this you will need to do the following steps:

* As soon as you are done with development (don't forget the tests if necessary please ;) ) please commit your code
* After that you will need to update the version number of the package.json, please do this via the [npm version](https://docs.npmjs.com/cli/version) tool. Don't forget to set the correct version number according to the [SEMVER](http://semver.org/) guidelines.
* Please push your code to master now and set a tag (same version as you set earlier) with a `v` prefix (e.g. `v1.1.0`) and add release notes for what has changed so everyone knows what to do when there are breaking changes and what has changed for them.
* Now you are ready to publish it to the npm repository. You can do this via `npm publish`. Further information can be founde on the official [npm documentation page](https://docs.npmjs.com/cli/publish).

## Features

* Allows you to add documentation for variants
* Powered by [marked](https://github.com/markedjs/marked)

## Configuration

The plugin passes all options through, please see the options available for `marked`: https://github.com/markedjs/marked#options-1

## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

To make it easier for everyone to contribute to this project and understand it,
please always update the documentation when you create or modify anything.

Also always try to improve atleast 1 small thing when you are already there so that over time
the project gets better and better, this is also known as [The Boy Scout Rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule).

## Links

- Repository: https://github.com/Itrulia/fractal-variant-readme
- Issue tracker: https://github.com/Itrulia/fractal-variant-readme/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    karlmerkli@gmail.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects:
  - Marked: https://github.com/markedjs/marked
  - Fractal: http://fractal.build/


## Licensing

Copyright (c) 2018 Karl Merkli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
