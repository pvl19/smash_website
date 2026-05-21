import React from 'react'

export default function SDSC() {
    return (
        <div className="location sdsc">
            <h2>San Diego Supercomputer Center (SDSC)</h2>
            <p>
            There are a couple of meeting locations within SDSC.
            </p>
            <p>
            The <b>Auditorium</b> is located on the lower level of SDSC, with the closest entrance off of Hopkins Drive.
            </p>
            <p>
                To get to the <b>Synthesis Center</b>, take the outdoor stairs up from the Auditorium, enter SDSC, and instead of continuing up the indoor stairs there is a door on the right, almost under the stairs.
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