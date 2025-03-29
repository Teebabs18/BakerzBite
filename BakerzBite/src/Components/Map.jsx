import React from 'react'

export default function Map() {
    
  return (
    <>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3323543495!2d3.3470612748325212!3d6.605558193388362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9232246d658d%3A0x7abcde53f2b47f7!2sAPTECH%20COMPUTER%20EDUCATION%2C%20ALLEN%20BRANCH!5e0!3m2!1sen!2sng!4v1743233300792!5m2!1sen!2sng"  width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="BakerzBite Location"></iframe>
    </div>
    </>
  )
}

