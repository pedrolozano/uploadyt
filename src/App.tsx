import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import { FileUploader } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css"
import './App.css';

function App() {
  
  
  return (
    <FileUploader
      accessLevel='public'
      acceptedFileTypes={['image/*']}
      variation='drop' />
  );
}

export default App;
