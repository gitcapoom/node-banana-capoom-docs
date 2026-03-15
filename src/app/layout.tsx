import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Node Banana Capoom Docs',
  description: 'Documentation for the Capoom fork of Node Banana — visual workflow editor for AI media generation',
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        Node Banana <span style={{ color: '#f59e0b' }}>Capoom</span>
      </span>
    }
    projectLink="https://github.com/gitcapoom/node-banana-capoom"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} — Node Banana Capoom Fork. Upstream:{' '}
    <a href="https://github.com/shrimbly/node-banana" target="_blank" rel="noreferrer">
      shrimbly/node-banana
    </a>
    {' | '}
    Original docs:{' '}
    <a href="https://node-banana-docs.vercel.app/" target="_blank" rel="noreferrer">
      node-banana-docs.vercel.app
    </a>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/gitcapoom/node-banana-capoom/tree/develop"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
