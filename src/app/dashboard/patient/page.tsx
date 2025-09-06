'use client'

import { useState } from 'react'
import { 
  MessageSquare, 
  CreditCard, 
  FileText, 
  Bell, 
  Settings, 
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  LogOut
} from 'lucide-react'

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('questions')

  // Mock data - would come from API in real app
  const patientData = {
    name: 'John Doe',
    email: 'john@example.com',
    credits: 25,
    questionsAsked: 12,
    questionsAnswered: 10
  }

  const recentQuestions = [
    {
      id: 1,
      title: 'Persistent headache for 3 days',
      status: 'answered',
      consultant: 'Dr. Sarah Wilson',
      specialty: 'Neurology',
      createdAt: '2024-01-15',
      priority: 'medium'
    },
    {
      id: 2,
      title: 'Skin rash on forearm',
      status: 'pending',
      consultant: null,
      specialty: 'Dermatology',
      createdAt: '2024-01-16',
      priority: 'low'
    },
    {
      id: 3,
      title: 'Chest pain during exercise',
      status: 'in_progress',
      consultant: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      createdAt: '2024-01-14',
      priority: 'high'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'answered':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'in_progress':
        return <Clock className="h-5 w-5 text-yellow-600" />
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-gray-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'answered':
        return 'Answered'
      case 'in_progress':
        return 'In Progress'
      case 'pending':
        return 'Pending'
      default:
        return 'Unknown'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-blue-800">
                  {patientData.credits} Credits
                </span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{patientData.name}</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('questions')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'questions' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <MessageSquare className="h-5 w-5" />
                <span>My Questions</span>
              </button>
              
              <button
                onClick={() => setActiveTab('credits')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'credits' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <CreditCard className="h-5 w-5" />
                <span>Credits & Billing</span>
              </button>
              
              <button
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'documents' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Documents</span>
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Profile Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'questions' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <MessageSquare className="h-8 w-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Questions</p>
                        <p className="text-2xl font-semibold text-gray-900">{patientData.questionsAsked}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Answered</p>
                        <p className="text-2xl font-semibold text-gray-900">{patientData.questionsAnswered}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center">
                      <Clock className="h-8 w-8 text-yellow-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Pending</p>
                        <p className="text-2xl font-semibold text-gray-900">{patientData.questionsAsked - patientData.questionsAnswered}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ask Question Button */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Questions</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Plus className="h-5 w-5" />
                    <span>Ask New Question</span>
                  </button>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  {recentQuestions.map((question) => (
                    <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{question.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(question.priority)}`}>
                              {question.priority} priority
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>Specialty: {question.specialty}</span>
                            <span>•</span>
                            <span>Asked on {question.createdAt}</span>
                            {question.consultant && (
                              <>
                                <span>•</span>
                                <span>Consultant: {question.consultant}</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(question.status)}
                            <span className="text-sm font-medium">{getStatusText(question.status)}</span>
                          </div>
                        </div>
                        
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'credits' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Credits & Billing</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Current Balance</h3>
                      <p className="text-3xl font-bold text-blue-600">{patientData.credits} Credits</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Buy More Credits
                    </button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">Credit Packages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 text-center">
                        <h5 className="font-medium text-gray-900">Starter</h5>
                        <p className="text-2xl font-bold text-gray-900 my-2">10 Credits</p>
                        <p className="text-gray-600 mb-4">$49</p>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded">
                          Select
                        </button>
                      </div>
                      
                      <div className="border-2 border-blue-600 rounded-lg p-4 text-center">
                        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                          Most Popular
                        </div>
                        <h5 className="font-medium text-gray-900">Standard</h5>
                        <p className="text-2xl font-bold text-gray-900 my-2">25 Credits</p>
                        <p className="text-gray-600 mb-4">$99</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                          Select
                        </button>
                      </div>
                      
                      <div className="border rounded-lg p-4 text-center">
                        <h5 className="font-medium text-gray-900">Premium</h5>
                        <p className="text-2xl font-bold text-gray-900 my-2">50 Credits</p>
                        <p className="text-gray-600 mb-4">$179</p>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={patientData.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={patientData.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
