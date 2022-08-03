import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import { FirebaseContext } from './Store/FirebaseContext';
import firebase from './Firebase/config' 
const root=createRoot(document.getElementById('root'))
root.render(
<FirebaseContext.Provider value={{firebase}}>
<App />

</FirebaseContext.Provider>
);
