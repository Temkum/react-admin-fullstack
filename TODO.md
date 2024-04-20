# REACT ADMIN DASHBOARD WITH REDUX TOOLKIT, 

- this app consist of dashboard with different stats, line chart, transaction table and pie chart from backend using MongoDB.
- use material UI for tables and data grid
- use server side pagination
- use aggregate calls in mongodb for performance chart

> technologies

Overall using MERN stack

**frontend**
- Material UI for styling, data grid for tables
- Nivo for our charts
- redux toolkit for state management
- redux toolkit query for making api calls

**backend**
- using nodejs as runtime
- expressjs for backend framework
- mongoose for managing mongodb

Download nodejs and preferred code IDE for development.

- create a server folder and run this command in it `npm i express body-parser cors dotenv helmet morgan mongoose nodemon`

## Client
- run `npm create vite@latest` to setup react
- install dev dependencies `npm i react-redux @reduxjs/toolkit react-datepicker react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @nivo/core @nivo/bar @nivo/geo @nivo/pie`

> if you have conflicts with react-datepicker, run `npm i react-datepicker@4.8.0`

4.03