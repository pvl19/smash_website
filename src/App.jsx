import React, { useState } from 'react'
import Banner from './components/banner'
import Overview from './pages/overview'
import Schedule from './pages/schedule'
import Locations from './pages/locations'
import PastMeetings from './pages/past-meetings'
import './App.css'

export default function App() {
  const [tab, setTab] = useState('Overview')

  return (
    <div className="app">
      <Banner />

      <div className="page">
        <aside className="sidebar" aria-label="Main navigation">
          <nav>
            <ul>
              <li>
                <button
                  className={tab === 'Overview' ? 'active' : ''}
                  onClick={() => setTab('Overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Schedule' ? 'active' : ''}
                  onClick={() => setTab('Schedule')}
                >
                  2025/2026 Schedule
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Locations' ? 'active' : ''}
                  onClick={() => setTab('Locations')}
                >
                  Locations
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="content">

          <section className="tab-content">
            {tab === 'Overview' && (
              <Overview>
              </Overview>
            )}

            {tab === 'Schedule' && (
              <Schedule>
              </Schedule>
            )}

            {tab === 'Locations' && (
              <Locations>
              </Locations>
            )}

            {tab === 'Past Meetings' && (
              <PastMeetings>
              </PastMeetings>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
