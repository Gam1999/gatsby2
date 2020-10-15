/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createRemoteFileNode } = require("gatsby-source-filesystem")
exports.onCreateNode = async ({
node,
actions,
store,
cache,
createNodeId,
}) => {
const { createNode } = actions
if (node.internal.type === "googleSheetSheet1Row") {
const fileNode = await createRemoteFileNode({
url: node.featuredimage,
store,
cache,
createNode,
parentNodeId: node.id,
createNodeId,
})
if (fileNode) {
node.localFeaturedImage___NODE = fileNode.id
}
}
}