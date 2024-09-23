import './App.css';
import React from 'react';

// 확장자를 명시적으로 추가하여 파일을 불러옴
import { StatusBar } from './components/StatusBar';
import { SaveButton } from './components/SaveButton';

export default function App() {
    return (
      <>
        <StatusBar />
        <SaveButton />
      </>
    );
  }