import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import { FileUploader } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import {Profile} from './Profile';
import "@aws-amplify/ui-react/styles.css"
import './App.css';

function App() {
  
  
  return (
    <><Profile></Profile>
    <FileUploader
      accessLevel='public'
      acceptedFileTypes={['image/*']}
      variation='drop' /></>
  );
}

export default App;
