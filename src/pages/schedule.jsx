import React from 'react'
import './schedule.css'

export default function Schedule() {
  return (
    <div className="schedule">
      <h1>2025/2026 Schedule</h1>
      <p>
        Meetings always take place on Tuesdays. Typically, food arrives at 11:45 for in person attendees, and the talks/presentations are from 12-1PM. A remote option is also available for all meetings at <a href="https://ucsd.zoom.us/j/92575531798?pwd=4uZdoloIdSiXb1OaYjI9faayFdA4Rb.1">this link</a>.
      </p>

      <div className="table-wrap">
        <table className="schedule-table" aria-label="Upcoming schedule">
          <thead>
            <tr>
              <th>Date</th>
              <th>Speaker / Topic</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>June 23, 2026</td>
              <td><a href="https://joshspeagle.com/" target="_blank" rel="noopener noreferrer">Dr. Joshua S. Speagle (沈佳士)</a></td>
              <td>SERF 383</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}