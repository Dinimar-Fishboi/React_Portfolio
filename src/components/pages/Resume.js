import React from 'react';
import resumePdf from './resumeFiles/dev.pdf'

export default function Resume() {

   

  return (
    <div className="border">
      <h1>Resume</h1>
      
      <p>
        Please download my <a download={resumePdf} href={resumePdf}>Resume</a>
      </p>
     
    </div>
  );
}