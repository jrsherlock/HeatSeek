import React, { useState, useEffect } from 'react';
import { MapPin, Target, Zap, Building2, Shield, ArrowRight, ChevronDown, Users, Radar, Navigation, Check, Star, X, Heart, DollarSign, AlertTriangle, TrendingUp, FileText, User, Phone, Mail, Award, Clock } from 'lucide-react';

// Simple grid card component (Grindr-style)
const GridCard = ({ company, match, distance, position }) => (
  <div
    className="absolute bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
    style={position}
  >
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
        <Building2 className="w-5 h-5 text-black" />
      </div>
      <div>
        <p className="text-black font-semibold text-sm">{company}</p>
        <p className="text-gray-600 text-xs">{distance} • {match}% match</p>
      </div>
    </div>
  </div>
);

// Phone mockup with swipe interface (Grindr-style)
const PhoneMockup = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  
  const prospects = [
    { name: "Nordic Tech Solutions", industry: "Healthcare IT", employees: "50-100", match: 94, floor: "IDS Center, 12th Floor" },
    { name: "Midwest Manufacturing Co", industry: "Manufacturing", employees: "200-500", match: 87, floor: "Wells Fargo Center, 8th Floor" },
    { name: "Great Lakes Financial", industry: "Financial Services", employees: "100-200", match: 91, floor: "Capella Tower, 15th Floor" },
  ];
  
  useEffect(() => {
    if (swipeDirection) {
      const timer = setTimeout(() => {
        setSwipeDirection(null);
        setCurrentCard((prev) => (prev + 1) % prospects.length);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [swipeDirection, prospects.length]);
  
  const prospect = prospects[currentCard];
  
  return (
    <div className="relative w-72 h-[580px] bg-white rounded-[2rem] p-2 shadow-lg border-2 border-gray-200">
      {/* Phone notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20" />
      
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
        {/* Header */}
        <div className="pt-10 px-4 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-yellow-400 flex items-center justify-center">
                <Target className="w-5 h-5 text-black" />
              </div>
              <span className="text-black font-bold text-lg">HeatSeek</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Skywalk Zone</span>
            </div>
          </div>
        </div>
        
        {/* Card stack */}
        <div className="px-4 relative h-80 pt-6">
          <div
            className={`absolute inset-x-4 bg-white rounded-lg p-4 border-2 border-gray-200 transition-all duration-300 ${
              swipeDirection === 'right' ? 'translate-x-full opacity-0' :
              swipeDirection === 'left' ? '-translate-x-full opacity-0' : ''
            }`}
          >
            {/* Match percentage badge */}
            <div className="absolute -top-3 -right-2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
              {prospect.match}% Match
            </div>
            
            {/* Company logo placeholder */}
            <div className="w-full h-28 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
              <Building2 className="w-16 h-16 text-gray-400" />
            </div>
            
            <h3 className="text-black font-bold text-xl mb-1">{prospect.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{prospect.industry}</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <Users className="w-4 h-4 text-gray-500" />
                <span>{prospect.employees} employees</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{prospect.floor}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <Navigation className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium">Skywalk accessible</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-20 inset-x-0 flex justify-center gap-6">
          <button
            onClick={() => setSwipeDirection('left')}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={() => setSwipeDirection('right')}
            className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-md hover:bg-yellow-500 transition-all"
          >
            <Heart className="w-8 h-8" />
          </button>
        </div>
        
        {/* Bottom nav */}
        <div className="absolute bottom-4 inset-x-4 flex justify-around border-t border-gray-200 pt-2">
          <div className="text-yellow-400"><Target className="w-6 h-6" /></div>
          <div className="text-gray-400"><Radar className="w-6 h-6" /></div>
          <div className="text-gray-400"><MapPin className="w-6 h-6" /></div>
          <div className="text-gray-400"><Users className="w-6 h-6" /></div>
        </div>
      </div>
    </div>
  );
};

// Navigation mockup
const NavigationMockup = () => (
  <div className="relative w-72 h-[580px] bg-white rounded-[2rem] p-2 shadow-lg border-2 border-gray-200">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20" />
    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
      {/* Map background */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Skywalk paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 580">
        <path d="M 50 300 L 144 300 L 144 200 L 238 200" stroke="#22c55e" strokeWidth="6" fill="none" strokeDasharray="12 6" />
        <path d="M 144 300 L 144 400 L 200 400" stroke="#22c55e" strokeWidth="6" fill="none" strokeDasharray="12 6" />
      </svg>
      
      {/* Your location */}
      <div className="absolute left-8 top-72 flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10 shadow-md" />
        <span className="text-black text-xs mt-2 bg-white px-2 py-0.5 rounded border border-gray-200">You</span>
      </div>
      
      {/* Target location */}
      <div className="absolute right-8 top-44 flex flex-col items-center">
        <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white shadow-md" />
        <span className="text-black text-xs mt-2 bg-white px-2 py-0.5 rounded border border-gray-200">Target</span>
      </div>
      
      {/* Direction arrow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Navigation className="w-20 h-20 text-yellow-400" style={{ transform: 'rotate(45deg)' }} />
      </div>
      
      {/* Bottom card */}
      <div className="absolute bottom-4 inset-x-4 bg-white rounded-lg p-4 border-2 border-gray-200 shadow-md">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="text-black font-bold">Nordic Tech Solutions</h4>
            <p className="text-gray-600 text-sm">IDS Center, 12th Floor</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-green-600" />
            <span className="text-green-600 text-sm font-medium">4 min via skywalk</span>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-yellow-500 transition-colors">
            Navigate <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Prospect Modal Component - Comprehensive Dossier
const ProspectModal = ({ prospect, onClose, onNavigate }) => {
  if (!prospect) return null;
  
  const getMaturityColor = (maturity) => {
    if (maturity === 'Low') return 'bg-red-100 text-red-700 border-red-300';
    if (maturity === 'Medium') return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    return 'bg-green-100 text-green-700 border-green-300';
  };
  
  const getQualificationColor = (qualified) => {
    return qualified ? 'bg-green-100 text-green-700 border-green-300' : 'bg-gray-100 text-gray-700 border-gray-300';
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-16 h-16 ${prospect.color} rounded-lg flex items-center justify-center shadow-md`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-black mb-1">{prospect.name}</h2>
                  <p className="text-lg text-gray-600">{prospect.industryCategory}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{prospect.building}, {prospect.floor}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-yellow-400 text-black text-sm font-bold px-4 py-1.5 rounded-full">
                  {prospect.match}% ICP Match
                </div>
                <div className={`px-3 py-1.5 rounded-full border text-sm font-medium ${getQualificationColor(prospect.qualified)}`}>
                  {prospect.qualified ? '✓ Qualified' : '⚠ Review Needed'}
                </div>
                <div className={`px-3 py-1.5 rounded-full border text-sm font-medium ${getMaturityColor(prospect.securityMaturity)}`}>
                  {prospect.securityMaturity} Maturity
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Company Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Company Demographics
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold text-black">{prospect.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold text-black">{prospect.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Budget:</span>
                  <span className="font-semibold text-black">{prospect.securityBudget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IT Team Size:</span>
                  <span className="font-semibold text-black">{prospect.itTeamSize}</span>
                </div>
                {prospect.esop && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">ESOP:</span>
                    <span className="font-semibold text-green-600">Yes</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Profile
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Maturity Level:</span>
                  <span className={`font-semibold px-2 py-0.5 rounded ${getMaturityColor(prospect.securityMaturity)}`}>
                    {prospect.securityMaturity}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance Needs:</span>
                  <span className="font-semibold text-black">{prospect.complianceFrameworks?.length || 0} frameworks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Score:</span>
                  <span className="font-semibold text-black">{prospect.riskScore}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cyber Insurance:</span>
                  <span className={`font-semibold ${prospect.hasCyberInsurance ? 'text-green-600' : 'text-gray-600'}`}>
                    {prospect.hasCyberInsurance ? 'Yes' : 'Unknown'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compliance Requirements */}
          {prospect.complianceFrameworks && prospect.complianceFrameworks.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Compliance Requirements
              </h3>
              <div className="flex flex-wrap gap-2">
                {prospect.complianceFrameworks.map((framework, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-300">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Key Drivers & Pain Points */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Key Drivers
              </h3>
              <ul className="space-y-2 text-sm">
                {prospect.keyDrivers?.map((driver, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Pain Points
              </h3>
              <ul className="space-y-2 text-sm">
                {prospect.painPoints?.map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Decision Makers */}
          {prospect.decisionMakers && prospect.decisionMakers.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Decision Makers & Contacts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {prospect.decisionMakers.map((person, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-black">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{person.role}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        person.role === 'Economic Buyer' ? 'bg-blue-100 text-blue-600' :
                        person.role === 'Technical Champion' ? 'bg-green-100 text-green-600' :
                        person.role === 'Compliance Stakeholder' ? 'bg-purple-100 text-purple-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <User className="w-4 h-4" />
                      </div>
                    </div>
                    {person.email && (
                      <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                        <Mail className="w-3 h-3" />
                        <span>{person.email}</span>
                      </div>
                    )}
                    {person.phone && (
                      <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                        <Phone className="w-3 h-3" />
                        <span>{person.phone}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Entry Strategy */}
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h3 className="font-bold text-black mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Recommended Entry Strategy
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-black mb-1">Wedge Service:</p>
                <p className="text-sm text-gray-700">{prospect.recommendedWedge}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-1">Expansion Path:</p>
                <p className="text-sm text-gray-700">{prospect.expansionPath}</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <DollarSign className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-black">Potential Annual Value: {prospect.potentialValue}</span>
              </div>
            </div>
          </div>
          
          {/* Qualification Notes */}
          {prospect.qualificationNotes && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Qualification Notes
              </h3>
              <p className="text-sm text-gray-700">{prospect.qualificationNotes}</p>
            </div>
          )}
          
          {/* Action Button */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onNavigate}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Navigation className="w-5 h-5" />
              Skywalk Me There
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation View Component
const NavigationView = ({ prospect, onClose }) => {
  if (!prospect) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black">Navigation to {prospect.name}</h2>
            <p className="text-gray-600">{prospect.building}, {prospect.floor}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="relative bg-gray-50" style={{ height: '500px' }}>
          {/* Map background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
          
          {/* Skywalk paths */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 40 55 L 50 55 L 50 45 L 60 45 L 60 35 L 70 35" 
                  stroke="#22c55e" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="8 4" 
                  opacity="0.8" />
          </svg>
          
          {/* Your location */}
          <div className="absolute" style={{ left: '40%', top: '55%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-black font-medium">PC HQ</span>
            </div>
          </div>
          
          {/* Target location */}
          <div className="absolute" style={{ left: `${prospect.x}%`, top: `${prospect.y}%`, transform: 'translate(-50%, -50%)' }}>
            <div className={`w-8 h-8 ${prospect.color} rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse`}>
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-black font-medium">{prospect.name}</span>
            </div>
          </div>
          
          {/* Direction arrow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Navigation className="w-16 h-16 text-green-600" style={{ transform: 'rotate(45deg)' }} />
          </div>
        </div>
        
        <div className="p-6 bg-white border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">Estimated Time</p>
              <p className="text-2xl font-bold text-black">4 minutes</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Distance</p>
              <p className="text-2xl font-bold text-black">0.3 mi</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Route</p>
              <p className="text-2xl font-bold text-green-600">Skywalk</p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <Navigation className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">Turn-by-turn directions</p>
                <ol className="text-sm text-green-700 mt-2 space-y-1 list-decimal list-inside">
                  <li>Exit PC HQ via 2nd floor skywalk</li>
                  <li>Continue through Crystal Court</li>
                  <li>Take skywalk to {prospect.building}</li>
                  <li>Elevator to {prospect.floor}</li>
                </ol>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Close Navigation
          </button>
        </div>
      </div>
    </div>
  );
};

// Interactive Demo Component
const InteractiveDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedCompanies, setSwipedCompanies] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedProspect, setSelectedProspect] = useState(null);
  const [showNavigation, setShowNavigation] = useState(false);
  
  const prospects = [
    { 
      id: 1,
      name: "Riverside Regional Hospital", 
      industryCategory: "Healthcare & Medicine",
      industry: "Regional Hospital", 
      employees: "450", 
      revenue: "$180M",
      securityBudget: "$75K+",
      itTeamSize: "2-3 people",
      match: 94,
      qualified: true,
      securityMaturity: "Low",
      riskScore: 7,
      hasCyberInsurance: true,
      esop: false,
      building: "IDS Center",
      floor: "12th Floor",
      x: 35,
      y: 25,
      color: "bg-blue-500",
      complianceFrameworks: ["HIPAA", "HITECH", "NIST CSF"],
      keyDrivers: [
        "HIPAA compliance requirements",
        "Patient data protection critical",
        "Resource-constrained IT team",
        "Recent cyber insurance audit"
      ],
      painPoints: [
        "No dedicated security staff",
        "Compliance gaps identified in audit",
        "24/7 security monitoring needed",
        "Vendor risk management challenges"
      ],
      decisionMakers: [
        {
          name: "Dr. Sarah Chen",
          title: "Chief Information Officer",
          role: "Technical Champion",
          email: "schen@riversidehealth.org",
          phone: "(612) 555-0123"
        },
        {
          name: "Michael Rodriguez",
          title: "Chief Financial Officer",
          role: "Economic Buyer",
          email: "mrodriguez@riversidehealth.org",
          phone: "(612) 555-0124"
        },
        {
          name: "Jennifer Park",
          title: "Compliance Director",
          role: "Compliance Stakeholder",
          email: "jpark@riversidehealth.org"
        }
      ],
      recommendedWedge: "Penetration Testing + HIPAA Gap Assessment",
      expansionPath: "Pen Testing → vCISO → MXDR → Full Security Partnership",
      potentialValue: "$125K-$150K annually",
      qualificationNotes: "Strong fit: 100+ beds, compliance-driven, executive engagement. Recent insurance audit creates urgency. IT team of 2 needs external expertise."
    },
    { 
      id: 2,
      name: "Midwest Precision Manufacturing", 
      industryCategory: "Manufacturing (ESOP)",
      industry: "Precision Manufacturing", 
      employees: "320", 
      revenue: "$85M",
      securityBudget: "$50K+",
      itTeamSize: "1-2 people",
      match: 87,
      qualified: true,
      securityMaturity: "Medium",
      riskScore: 6,
      hasCyberInsurance: true,
      esop: true,
      building: "Wells Fargo Center",
      floor: "8th Floor",
      x: 60,
      y: 45,
      color: "bg-yellow-400",
      complianceFrameworks: ["CMMC Level 2", "NIST 800-171", "DFARS"],
      keyDrivers: [
        "CMMC compliance for DoD contracts",
        "ESOP fiduciary responsibilities",
        "IP protection critical",
        "OT security concerns"
      ],
      painPoints: [
        "CMMC assessment gaps",
        "Limited security expertise internally",
        "OT/IT convergence security",
        "Vendor compliance tracking"
      ],
      decisionMakers: [
        {
          name: "Robert Thompson",
          title: "President & CEO",
          role: "Economic Buyer",
          email: "rthompson@midwestprecision.com",
          phone: "(612) 555-0201"
        },
        {
          name: "Lisa Anderson",
          title: "IT Director",
          role: "Technical Champion",
          email: "landerson@midwestprecision.com"
        },
        {
          name: "David Kim",
          title: "Board Member (ESOP Trustee)",
          role: "Governance Influencer",
          email: "dkim@midwestprecision.com"
        }
      ],
      recommendedWedge: "CMMC Gap Assessment + Penetration Testing",
      expansionPath: "CMMC Assessment → vCISO → MXDR → Compliance Program",
      potentialValue: "$100K-$125K annually",
      qualificationNotes: "ESOP with strong fiduciary drivers. CMMC requirements create compliance urgency. Small IT team needs external support. Board-level security awareness."
    },
    { 
      id: 3,
      name: "Great Lakes Community Credit Union", 
      industryCategory: "Financial Services",
      industry: "Credit Union", 
      employees: "185", 
      revenue: "$65M",
      securityBudget: "$60K+",
      itTeamSize: "2-3 people",
      match: 91,
      qualified: true,
      securityMaturity: "Medium",
      riskScore: 8,
      hasCyberInsurance: true,
      esop: false,
      building: "Capella Tower",
      floor: "15th Floor",
      x: 25,
      y: 60,
      color: "bg-green-500",
      complianceFrameworks: ["GLBA", "FFIEC", "NCUA"],
      keyDrivers: [
        "FFIEC examination preparation",
        "GLBA compliance requirements",
        "Cyber insurance renewal",
        "Member data protection"
      ],
      painPoints: [
        "FFIEC exam findings",
        "Third-party vendor risk",
        "24/7 security monitoring gaps",
        "Board reporting requirements"
      ],
      decisionMakers: [
        {
          name: "Patricia Martinez",
          title: "Chief Executive Officer",
          role: "Economic Buyer",
          email: "pmartinez@glccu.org",
          phone: "(612) 555-0301"
        },
        {
          name: "James Wilson",
          title: "VP of IT & Security",
          role: "Technical Champion",
          email: "jwilson@glccu.org"
        },
        {
          name: "Carolyn Brown",
          title: "Chief Risk Officer",
          role: "Compliance Stakeholder",
          email: "cbrown@glccu.org"
        }
      ],
      recommendedWedge: "FFIEC Gap Assessment + Penetration Testing",
      expansionPath: "FFIEC Assessment → vCISO → MXDR → Compliance Advisory",
      potentialValue: "$110K-$140K annually",
      qualificationNotes: "Strong regulatory drivers. FFIEC exam creates urgency. Prefers boutique service over mass-market. Executive engagement confirmed."
    },
    { 
      id: 4,
      name: "North Star Grocery Chain", 
      industryCategory: "Retail & E-Commerce",
      industry: "Grocery Retail", 
      employees: "280", 
      revenue: "$120M",
      securityBudget: "$45K+",
      itTeamSize: "1-2 people",
      match: 89,
      qualified: true,
      securityMaturity: "Low",
      riskScore: 7,
      hasCyberInsurance: false,
      esop: false,
      building: "Target Plaza",
      floor: "10th Floor",
      x: 70,
      y: 30,
      color: "bg-red-500",
      complianceFrameworks: ["PCI DSS", "State Data Breach Laws"],
      keyDrivers: [
        "PCI DSS compliance",
        "POS system security",
        "Customer data protection",
        "Payment card security"
      ],
      painPoints: [
        "PCI DSS validation gaps",
        "POS security vulnerabilities",
        "No dedicated security staff",
        "Vendor security assessments"
      ],
      decisionMakers: [
        {
          name: "Thomas Johnson",
          title: "Chief Operating Officer",
          role: "Economic Buyer",
          email: "tjohnson@northstargrocery.com",
          phone: "(612) 555-0401"
        },
        {
          name: "Amanda Lee",
          title: "IT Manager",
          role: "Technical Champion",
          email: "alee@northstargrocery.com"
        }
      ],
      recommendedWedge: "PCI DSS Gap Assessment + Penetration Testing",
      expansionPath: "PCI Assessment → vCISO → MXDR → Security Program",
      potentialValue: "$90K-$110K annually",
      qualificationNotes: "PCI compliance driver. Small IT team needs support. Multiple locations increase complexity. Growth-oriented with expanding security needs."
    },
    { 
      id: 5,
      name: "Metro Community College", 
      industryCategory: "Higher Education",
      industry: "Community College", 
      employees: "420", 
      revenue: "$45M",
      securityBudget: "$40K+",
      itTeamSize: "2-3 people",
      match: 85,
      qualified: true,
      securityMaturity: "Low",
      riskScore: 6,
      hasCyberInsurance: true,
      esop: false,
      building: "Nicollet Mall",
      floor: "5th Floor",
      x: 45,
      y: 50,
      color: "bg-purple-500",
      complianceFrameworks: ["FERPA", "State Privacy Laws"],
      keyDrivers: [
        "Student data protection (FERPA)",
        "Resource-constrained IT team",
        "Cultural alignment with education",
        "Budget-conscious but values expertise"
      ],
      painPoints: [
        "No dedicated security role",
        "Student PII protection",
        "Limited security budget",
        "IT team bandwidth constraints"
      ],
      decisionMakers: [
        {
          name: "Dr. Robert Williams",
          title: "Chief Information Officer",
          role: "Technical Champion",
          email: "rwilliams@metrocc.edu",
          phone: "(612) 555-0501"
        },
        {
          name: "Maria Garcia",
          title: "Vice President of Finance",
          role: "Economic Buyer",
          email: "mgarcia@metrocc.edu"
        }
      ],
      recommendedWedge: "Security Assessment + FERPA Compliance Review",
      expansionPath: "Assessment → vCISO → MXDR → Security Partnership",
      potentialValue: "$75K-$95K annually",
      qualificationNotes: "Well-funded community college. Strong cultural fit. IT team seeking trusted local expertise. Budget available but requires value demonstration."
    },
  ];
  
  const currentProspect = prospects[currentIndex];
  
  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    
    if (direction === 'right') {
      // Add to map
      setTimeout(() => {
        setSwipedCompanies(prev => [...prev, currentProspect]);
        setCurrentIndex(prev => (prev + 1) % prospects.length);
        setSwipeDirection(null);
        setDragOffset(0);
      }, 500);
    } else {
      // Skip
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % prospects.length);
        setSwipeDirection(null);
        setDragOffset(0);
      }, 500);
    }
  };
  
  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
  };
  
  const handleMouseMove = (e) => {
    if (dragStart !== null) {
      const diff = e.clientX - dragStart;
      setDragOffset(diff);
    }
  };
  
  const handleMouseUp = () => {
    if (dragStart !== null) {
      if (Math.abs(dragOffset) > 100) {
        handleSwipe(dragOffset > 0 ? 'right' : 'left');
      } else {
        setDragOffset(0);
      }
      setDragStart(null);
    }
  };
  
  const handleTouchStart = (e) => {
    setDragStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (dragStart !== null) {
      const diff = e.touches[0].clientX - dragStart;
      setDragOffset(diff);
    }
  };
  
  const handleTouchEnd = () => {
    if (dragStart !== null) {
      if (Math.abs(dragOffset) > 100) {
        handleSwipe(dragOffset > 0 ? 'right' : 'left');
      } else {
        setDragOffset(0);
      }
      setDragStart(null);
    }
  };
  
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Swipeable Cards */}
      <div className="space-y-6">
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">Swipe right to add to map • Swipe left to skip</p>
          <p className="text-sm text-gray-500">{currentIndex + 1} of {prospects.length}</p>
        </div>
        
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Swipe overlay indicators */}
          {dragOffset > 50 && (
            <div className="absolute left-8 z-10 bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
              ✓ Add to Map
            </div>
          )}
          {dragOffset < -50 && (
            <div className="absolute right-8 z-10 bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
              ✕ Skip
            </div>
          )}
          
          <div
            className={`absolute w-full max-w-sm bg-white rounded-lg p-6 border-2 shadow-lg cursor-grab active:cursor-grabbing transition-all duration-300 ${
              swipeDirection === 'right' 
                ? 'translate-x-[200%] rotate-45 opacity-0 scale-75 border-green-500' 
                : swipeDirection === 'left' 
                ? '-translate-x-[200%] -rotate-45 opacity-0 scale-75 border-red-500'
                : dragOffset > 50
                ? 'border-green-500 shadow-green-200'
                : dragOffset < -50
                ? 'border-red-500 shadow-red-200'
                : 'border-gray-200'
            }`}
            style={{ 
              transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.15}deg) scale(${1 - Math.abs(dragOffset) * 0.001})`,
              opacity: swipeDirection ? 0 : (1 - Math.abs(dragOffset) * 0.002)
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Match badge */}
            <div className="absolute -top-3 -right-2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
              {currentProspect.match}% Match
            </div>
            
            {/* Company logo */}
            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
              <Building2 className="w-20 h-20 text-gray-400" />
            </div>
            
            <h3 className="text-black font-bold text-2xl mb-1">{currentProspect.name}</h3>
            <p className="text-gray-600 text-base mb-2">{currentProspect.industryCategory}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className={`px-2 py-0.5 rounded text-xs font-medium ${
                currentProspect.qualified ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {currentProspect.qualified ? '✓ Qualified' : 'Review'}
              </div>
              <div className={`px-2 py-0.5 rounded text-xs font-medium ${
                currentProspect.securityMaturity === 'Low' ? 'bg-red-100 text-red-700' :
                currentProspect.securityMaturity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {currentProspect.securityMaturity} Maturity
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-gray-500" />
                <span>{currentProspect.employees} employees • {currentProspect.revenue}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="w-5 h-5 text-gray-500" />
                <span>{currentProspect.complianceFrameworks?.join(', ') || 'No compliance data'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>{currentProspect.building}, {currentProspect.floor}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Navigation className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-medium">Skywalk accessible</span>
              </div>
              {currentProspect.recommendedWedge && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-3">
                  <p className="text-xs font-semibold text-black mb-1">Entry Strategy:</p>
                  <p className="text-xs text-gray-700">{currentProspect.recommendedWedge}</p>
                </div>
              )}
            </div>
            
            {/* Swipe hints */}
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => handleSwipe('left')}
                className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <X className="w-7 h-7" />
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-md hover:bg-yellow-500 transition-all"
              >
                <Heart className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
        
        {swipedCompanies.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700 font-medium">
              ✓ {swipedCompanies.length} prospect{swipedCompanies.length !== 1 ? 's' : ''} added to your map
            </p>
          </div>
        )}
      </div>
      
      {/* Minneapolis Skywalk Map */}
      <div className="lg:sticky lg:top-24">
        <div className="bg-white rounded-lg border-2 border-gray-200 shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-black">Downtown Minneapolis Skywalk</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Skywalk Paths</span>
            </div>
          </div>
          
          <div className="relative bg-gray-50 rounded-lg border border-gray-200" style={{ aspectRatio: '4/3', minHeight: '500px' }}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
            
            {/* Skywalk paths - Main routes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Main skywalk routes */}
              <path d="M 20 30 L 50 30 L 50 20 L 80 20" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
              <path d="M 50 30 L 50 50 L 70 50" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
              <path d="M 30 50 L 50 50 L 50 70 L 60 70" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
              <path d="M 40 40 L 60 40 L 60 30" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
              <path d="M 25 60 L 45 60 L 45 45" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
            </svg>
            
            {/* Your location (starting point) */}
            <div className="absolute" style={{ left: '40%', top: '55%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-black font-medium">PC HQ</span>
              </div>
            </div>
            
            {/* Swiped companies on map */}
            {swipedCompanies.map((company, index) => (
              <div
                key={company.id}
                className="absolute animate-fade-in cursor-pointer group"
                style={{ 
                  left: `${company.x}%`, 
                  top: `${company.y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.1}s`,
                  zIndex: 10
                }}
                onClick={() => setSelectedProspect(company)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.zIndex = '20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.zIndex = '10';
                }}
              >
                <div className={`w-6 h-6 ${company.color} rounded-full border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-125 group-hover:shadow-xl transition-all duration-200`}>
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 shadow-lg">
                    <p className="text-xs font-semibold text-black">Click for details</p>
                  </div>
                </div>
                
                {/* Skywalk path to your location */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <path
                    d={`M ${company.x} ${company.y} L 40 55`}
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 4"
                    opacity="0.7"
                    className="animate-draw-path"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  />
                </svg>
              </div>
            ))}
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-black mb-2">Legend</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-600">PC HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-600">Prospects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">Skywalk Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Prospect Modal */}
      {selectedProspect && !showNavigation && (
        <ProspectModal
          prospect={selectedProspect}
          onClose={() => setSelectedProspect(null)}
          onNavigate={() => setShowNavigation(true)}
        />
      )}
      
      {/* Navigation View */}
      {selectedProspect && showNavigation && (
        <NavigationView
          prospect={selectedProspect}
          onClose={() => {
            setShowNavigation(false);
            setSelectedProspect(null);
          }}
        />
      )}
    </div>
  );
};

// Feature card component (clean, simple)
const FeatureCard = ({ icon: Icon, title, description, color = "yellow" }) => {
  const colorClasses = {
    yellow: "bg-yellow-400 text-black",
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
  };
  
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
      <div className={`w-14 h-14 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-black text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Main landing page component
export default function HeatSeekLanding() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes draw-path {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes swipe-right {
          0% {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(200%) rotate(45deg) scale(0.75);
            opacity: 0;
          }
        }
        @keyframes swipe-left {
          0% {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-200%) rotate(-45deg) scale(0.75);
            opacity: 0;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-draw-path {
          animation: draw-path 1s ease-out forwards;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .animate-swipe-right {
          animation: swipe-right 0.5s ease-out forwards;
        }
        .animate-swipe-left {
          animation: swipe-left 0.5s ease-out forwards;
        }
      `}</style>
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-200' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
              <Target className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-black">HeatSeek</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-black transition-colors font-medium">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-black transition-colors font-medium">Demo</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition-colors font-medium">Pricing</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Get Early Access
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Built for Cybersecurity Firms</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
              Never Make a Cold Call Again.
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong className="text-black">Double meaning:</strong> No more cold-calling prospects <em>and</em> you literally never have to step into the -20°F Minneapolis winter. Your outreach and your body stay warm. HeatSeek turns you into a <strong className="text-black">heat-seeking missile</strong> for your ideal customers—all through the climate-controlled Minneapolis Skywalk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 group shadow-md">
                Start Hunting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#demo" className="border-2 border-gray-300 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Try Interactive Demo
              </a>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm font-medium text-gray-700">
                    {['JD', 'MK', 'AS', 'RB', 'TC'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm">Loved by 500+ sales pros in Minneapolis</p>
              </div>
            </div>
          </div>
          
          {/* Phone mockups */}
          <div className="relative flex justify-center items-center py-12">
            {/* Grid cards */}
            <GridCard company="Target Corp" match={92} distance="0.3 mi" position={{ top: '5%', left: '5%' }} />
            <GridCard company="Best Buy HQ" match={88} distance="0.5 mi" position={{ top: '15%', right: '0%' }} />
            <GridCard company="US Bank" match={85} distance="0.4 mi" position={{ bottom: '20%', left: '0%' }} />
            
            <div className="relative z-10">
              <PhoneMockup />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>
      
      {/* Social proof bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-6 font-medium">TRUSTED BY SALES TEAMS AT</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Palo Alto Networks', 'CrowdStrike', 'Rapid7', 'Optiv', 'GuidePoint'].map((company) => (
              <div key={company} className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-gray-400" />
                <span className="text-gray-700 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Prospecting, Reimagined
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop cold calling. Start warm walking. HeatSeek combines the addictive UX of dating apps with military-grade navigation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Target}
              title="ICP Matching Engine"
              description="Enter your ideal customer profile—industry, company size, tech stack, budget—and watch as we surface perfect matches within walking distance."
              color="yellow"
            />
            <FeatureCard
              icon={Navigation}
              title="Skywalk Navigation"
              description="Minneapolis-specific routing that keeps you warm and dry. Never step outside in January again while you're hunting for deals."
              color="blue"
            />
            <FeatureCard
              icon={Zap}
              title="Hot Lead Alerts"
              description="Get notified when a high-match ICP enters your radius. Perfect for those long days at the coffee shop in the IDS Center."
              color="red"
            />
            <FeatureCard
              icon={Users}
              title="Decision Maker Intel"
              description="See who you need to talk to, their LinkedIn, recent company news, and even their preferred coffee order (okay, maybe not that last one)."
              color="blue"
            />
            <FeatureCard
              icon={Radar}
              title="Proximity Radar"
              description="Real-time visualization of all ICP matches within your chosen radius. Filter by match score, industry, or walkability."
              color="green"
            />
            <FeatureCard
              icon={Zap}
              title="Native Integrations"
              description="Seamlessly sync with HubSpot, Microsoft Teams, Apollo, and Notion. Swipe right? It's already in your CRM. Left? Tagged for later review. No more forgetting to log your walk-in attempts."
              color="yellow"
            />
          </div>
        </div>
      </section>
      
      {/* Integrations Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Native Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              HeatSeek seamlessly connects with your existing sales stack. Every swipe, every prospect, automatically synced.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* HubSpot */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">HubSpot</h3>
                <p className="text-sm text-gray-600">Auto-sync contacts, deals, and activities to your CRM</p>
              </div>
            </div>
            
            {/* Microsoft Teams */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Microsoft Teams</h3>
                <p className="text-sm text-gray-600">Share hot leads and updates with your team instantly</p>
              </div>
            </div>
            
            {/* Apollo */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Apollo</h3>
                <p className="text-sm text-gray-600">Enrich prospects with verified contact data</p>
              </div>
            </div>
            
            {/* Notion */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-gray-800 hover:shadow-lg transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Notion</h3>
                <p className="text-sm text-gray-600">Track prospects and build your sales wiki</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">All integrations included in Hunter and Apex plans</p>
            <a href="#pricing" className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors">
              View Pricing →
            </a>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              From Swipe to Handshake
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three steps to transform your afternoon coffee break into a pipeline-building expedition.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { step: '01', title: 'Define Your ICP', description: 'Set your ideal customer criteria: industry verticals, employee count, revenue range, tech stack requirements, and compliance needs. For cybersecurity? Think healthcare, finance, manufacturing.' },
                { step: '02', title: 'Swipe & Sort', description: 'Browse through local matches like you\'re on Tinder, but for B2B. Swipe right on promising prospects, left on poor fits. Build your "hot list" of targets.' },
                { step: '03', title: 'Lock On & Navigate', description: 'Select a target from your hot list and activate HeatSeek mode. We\'ll guide you through the Minneapolis Skywalk system directly to their building lobby.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-yellow-400 flex items-center justify-center text-2xl font-bold text-black">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <NavigationMockup />
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Try It Yourself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Swipe through prospects and watch them appear on the Minneapolis Skywalk map in real-time.
            </p>
          </div>
          
          <InteractiveDemo />
        </div>
      </section>
      
      {/* Minneapolis-specific section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">Minneapolis Edition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Built for the Skywalk Warriors
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                9.5 miles of climate-controlled prospecting paradise. HeatSeek is optimized for the Minneapolis Skywalk system, connecting you to over 80 city blocks of potential customers without ever stepping outside.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '80+', label: 'City Blocks Connected' },
                  { stat: '200+', label: 'Buildings in Network' },
                  { stat: '-20°F', label: 'Outside? Who Cares.' },
                  { stat: '∞', label: 'Warm Handshakes' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-3xl font-bold text-black">{item.stat}</p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-black">Coverage Zones</h3>
                <div className="space-y-4">
                  {[
                    { zone: 'IDS Center & Crystal Court', spots: 45, color: 'bg-yellow-400' },
                    { zone: 'Nicollet Mall Corridor', spots: 38, color: 'bg-red-500' },
                    { zone: 'Wells Fargo Center', spots: 32, color: 'bg-blue-500' },
                    { zone: 'Capella Tower', spots: 28, color: 'bg-green-500' },
                    { zone: 'Target HQ Complex', spots: 24, color: 'bg-yellow-400' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-gray-700">{item.zone}</span>
                      </div>
                      <span className="text-black font-semibold">{item.spots} prospects</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade when you're addicted.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Scout',
                price: 'Free',
                description: 'Perfect for trying out the waters',
                features: ['25 swipes/day', 'Basic ICP matching', 'Standard navigation', 'Community support'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Hunter',
                price: '$49',
                period: '/mo',
                description: 'For serious prospectors',
                features: ['Unlimited swipes', 'Advanced ICP filters', 'Priority navigation', 'HubSpot, Teams, Apollo & Notion sync', 'Decision maker data', 'Hot lead alerts'],
                cta: 'Start Hunting',
                popular: true,
              },
              {
                name: 'Apex',
                price: '$199',
                period: '/mo',
                description: 'For sales teams',
                features: ['Everything in Hunter', 'Team dashboards', 'Territory management', 'API access', 'Custom integrations', 'Dedicated success manager'],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-8 ${
                  plan.popular
                    ? 'bg-white border-2 border-yellow-400 shadow-lg'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-50 rounded-lg p-12 border-2 border-gray-200">
            <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Ready to Become a Heat-Seeking Missile?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of cybersecurity sales pros already crushing their quotas in the Minneapolis Skywalk system.
            </p>
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors inline-flex items-center gap-2 group shadow-md">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-500 text-sm mt-4">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                <Target className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-black">HeatSeek</span>
            </div>
            <div className="flex items-center gap-8 text-gray-600 text-sm">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 HeatSeek. Built in Minneapolis.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
