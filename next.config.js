/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

const isGithubActions = process.env.GITHUB_AACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace('/.*?\//', '')
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}

module.exports = {
    ...nextConfig,
    assetPrefix,
    basePath,
}

