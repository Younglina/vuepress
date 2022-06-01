const path = require('path');

module.exports = (options, ctx) => {
    return {
        name: 'leetcode-heatmap',
        clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
        define: {
            copybuttonText: options.copybuttonText || 'copy',
            copiedButtonText: options.copiedButtonText || "copied!"
        },
    }
}