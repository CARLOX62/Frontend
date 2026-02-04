import {configureStore} from '@reduxjs/toolkit';
import counterReduser from '../Features/counter/counterslice.jsx';

export const store = configureStore({
    reducer: {
        counter: counterReduser
    }
});

// steps:
// 1. create a folder named Redux
// 2. inside Redux folder create a file named store.js
// 3. import configureStore from @reduxjs/toolkit
// 4. import the reducer from the feature slice file
// 5. create the store using configureStore method and pass an object with reducer property
// 6. export the store
