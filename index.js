const marked = require("marked");

module.exports = function variantReadmeParserPlugin(opts = {}) {
    marked.setOptions(opts);

    return {
        name: "variant-readme-parser",
        transform: "components",
        handler(components, state, app) {
            return components.map(component => {
                component.variants = component.variants.map(variant => {
                    const readme = component.getFiles().find(file => {
                        return file.basename.toLowerCase() === `readme--${variant.id}.md`;
                    });

                    if (readme) {
                        variant.readme = marked(readme.contents.toString());
                    }

                    return variant;
                });


                return component;
            });
        }
    }
}