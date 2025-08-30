"use client";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";

// Hardcoded Workshop Schedule (can later fetch from API)
const workshopSchedule = [
  {
    date: "Fri, Aug 29",
    sessions: [
      {
        time: "09:00 - 13:00",
        title:
          "Government In Your Hand: Transforming Public Services for emaSwati",
        facilitators: "Bonga / Jackson (MICT)",
      },
    ],
  },
  {
    date: "Sat, Aug 30",
    sessions: [
      {
        time: "13:00 - 17:00",
        title: "Careers in Digital Technology: Opportunities for the Youth",
        facilitators: "Fanele Chester / WomEng_Eswatini",
      },
      {
        time: "09:00 - 13:00",
        title: "The Power of AI",
        facilitators: "Lucky Sithole / Prof Sandile Motsa",
      },
      {
        time: "13:00 - 17:00",
        title: "Cybersecurity and Digital Trust: Protecting Citizens",
        facilitators: "Nokuthula Hlophe / Badelisa Magagula / Mr. Jele",
      },
    ],
  },
  {
    date: "Sun, Aug 31",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "Digital Agriculture: Feeding Eswatini Using Smart Solutions",
        facilitators:
          "Joy Numalo-Littler / Douglas Seyama / Women Farmer of the Year",
      },
    ],
  },
  {
    date: "Mon, Sept 1",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "Basic Digital Skills for Emaswati",
        facilitators: "Khanyakwezwe Dlamini (RSTP)",
      },
      {
        time: "13:00 - 17:00",
        title: "Advanced Digital Transformation",
        facilitators: "Menzi Khumalo / Mbulelo Mabusela / Dr Sifiso Nkhambule",
      },
    ],
  },
  {
    date: "Tue, Sept 2",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "Cybersecurity and Digital Trust",
        facilitators: "Nokuthula Hlophe / Badelisa Magagula / Mr. Jele",
      },
      {
        time: "13:00 - 17:00",
        title:
          "Bridging the Rural-Urban Divide: How Technology Brings Services Closer",
        facilitators: "Luke VanderWal / Sicelo Ndlandla / Georgetown University",
      },
    ],
  },
  {
    date: "Wed, Sept 3",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "e-Health and Telemedicine: Technology in Healthcare Access",
        facilitators: "Fulatsa Zwane-Sibanyoni / MTN / Eswatini Mobile",
      },
      {
        time: "13:00 - 17:00",
        title: "Digital Agriculture: Feeding Eswatini Using Smart Solutions",
        facilitators:
          "Joy Numalo-Littler / Douglas Seyama / Women Farmer of the Year",
      },
    ],
  },
  {
    date: "Thurs, Sept 4",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "Emerging Technologies: Shaping the Future",
        facilitators: "Menzi Khumalo / Mbulelo Mabusela / Dr Sifiso Nkhambule",
      },
    ],
  },
  {
    date: "Fri, Sept 5",
    sessions: [
      {
        time: "13:00 - 17:00",
        title: "The Power of AI",
        facilitators: "Lucky Sithole / Prof Sandile Motsa",
      },
      {
        time: "09:00 - 13:00",
        title:
          "Government In Your Hand: Transforming Public Services for emaSwati",
        facilitators: "Bonga / Jackson (MICT)",
      },
      {
        time: "13:00 - 17:00",
        title: "Citizen Voices Online: Technology for Public Participation",
        facilitators: "Sibusiso Mngadi / Jose Rego",
      },
    ],
  },
  {
    date: "Sat, Sept 6",
    sessions: [
      {
        time: "14:30 - 17:00",
        title: "Careers in Digital Technology: Opportunities for the Youth",
        facilitators: "Fanele Chester / WomEng_Eswatini",
      },
    ],
  },
  {
    date: "Sun, Sept 7",
    sessions: [
      {
        time: "09:00 - 13:00",
        title: "Citizen Voices Online: Technology for Public Participation",
        facilitators: "Sibusiso Mngadi / Jose Rego",
      },
    ],
  },
];

export default function RegistrationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Loader Screen
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="https://i.ibb.co/mVsH16TX/images-removebg-preview.png"
                alt="Trade Fair Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <Commet color="#ffffff" size="large" />
          <p className="mt-6 text-white text-lg font-medium">Loading Workshop Schedule...</p>
          <p className="mt-2 text-blue-100 text-sm">Preparing an amazing experience for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-white">
      {/* Header Section */}
      <header className="bg-white/90 backdrop-blur-md border-b border-blue-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="relative">
                <img
                  src="https://i.ibb.co/mVsH16TX/images-removebg-preview.png"
                  alt="Trade Fair Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 via-slate-700 to-gray-800 bg-clip-text text-transparent">
                  Trade Fair 2025
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  EITF Workshop Schedule
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-slate-600 text-white text-sm font-medium rounded-full shadow-lg">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                Aug 29 – Sept 7, 2025
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Schedule Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 via-slate-600 to-gray-700 px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center sm:justify-start">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Workshop Schedule
            </h2>
          </div>

          <div className="p-4 sm:p-6">
            {workshopSchedule.map((day, index) => (
              <article key={index} className="mb-8 last:mb-0">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full mr-3"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 via-slate-700 to-gray-700 bg-clip-text text-transparent">
                    {day.date}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-200 via-slate-200 to-gray-200 ml-4"></div>
                </div>

                <div className="grid gap-4">
                  {day.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-r from-white via-blue-50/30 to-slate-50/50 rounded-xl p-4 sm:p-6 border border-blue-200/50 hover:border-blue-300/70 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-slate-400 to-gray-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700 text-xs font-medium rounded-full border border-blue-200/50">
                            <svg className="w-3 h-3 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {session.time}
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                          {session.title}
                        </h4>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full flex items-center justify-center mr-3 mt-1 border border-blue-200/50">
                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-600 mb-1">Facilitators</p>
                            <p className="text-sm text-slate-700 leading-relaxed">{session.facilitators}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-300 text-sm">
              © 2025 Trade Fair. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
