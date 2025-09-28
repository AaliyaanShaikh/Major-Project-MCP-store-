import { Link } from 'react-router-dom'
import ServerList from '../components/ServerList'
import Spline from '@splinetool/react-spline/react'

const Home = () => {
  return (
    <div>
      <div className="h-full w-full">
        <Spline scene="https://prod.spline.design/ZGx9q1YuEXk1eXYP/scene.splinecode" />
      </div>
      <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MCP Store
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted platform for server management and monitoring
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/sign" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link 
            to="/info" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Server Status</h2>
        <ServerList />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
          <p className="text-gray-600">Deploy your applications quickly and efficiently</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
          <p className="text-gray-600">Monitor your servers with real-time analytics</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-3xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
          <p className="text-gray-600">Enterprise-grade security and reliability</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
