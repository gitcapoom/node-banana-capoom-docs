import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  search: { codeblocks: false },
  contentDirBasePath: '/docs',
})

export default withNextra({
  images: { unoptimized: true },
})
