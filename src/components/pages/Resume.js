import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePdf from './resumeFiles/dev.pdf'

export default function Resume() {

   

  return (
    <div className="border">
      <h1>Resume</h1>
      
      <p>
        Please download my <button href='./resumeFiles/dev.pdf'>Resume</button>
      </p>
      <a download="dev.pdf" href="./resumeFiles/dev.pdf" src="./resumeFiles/dev.pdf" > Download Resume</a>
      <Document file={resumePdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}