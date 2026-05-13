import React from 'react'

export default function SDSC() {
    return (
        <div className="location sdsc">
            <h2>San Diego Supercomputer Center (SDSC) Auditorium</h2>
            <p>
            The SDSC Auditorium is located on the lower level of SDSC. The closest entrance is off of Hopkins Drive.
            </p>

            {/* Responsive iframe wrapper - iframe takes full size of the wrapper */}
            <div className="iframe-wrapper" aria-hidden={false}>
                <iframe
              src="https://map.concept3d.com/?id=1005#!bm/?ct/18312,63891,65653?m/237182?s/supercompu?mc/32.884153366485836,-117.24002800000989?z/17.534217573436863?lvl/0"
              title="University of California San Diego - San Diego Supercomputer Center"
              loading="lazy"
              allow="geolocation; gyroscope; accelerometer"
              referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}