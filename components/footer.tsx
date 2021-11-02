import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p>
              {"Site by Chenyu H based on "}
              <a
                href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript"
                className="hover:underline"
              >
                Next.js blog-starter
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
