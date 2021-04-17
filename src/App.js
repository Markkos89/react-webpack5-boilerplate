import { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='flex items-center justify-center h-screen'>
        Webpack 5 boilerplate with React 17, using babel, sass, with a hot dev
        server and an optimized production build. process.env.API_URL:
        {process.env.API_URL} !!! Make sure to put both .env.* files in
        gitignore.
      </div>
    )
  }
}

export default App
