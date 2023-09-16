import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Icon from './components/Icon/Icon';
import Card from './components/Card/Card';
import Grid from './components/Grid/Grid';

function App() {
    return (
        <>
            <Grid numberOfCards={9} />
        </>
    );
}

export default App;
