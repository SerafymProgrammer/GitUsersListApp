import React from 'react';
import './App.scss';
import {Routes, Route, Link} from 'react-router-dom'
import UserListPage from "./components/user_list_page/user_list_page.component";
import Header from "./components/header/header.component";
import Router from "./router/router";

function App() {
    return (
        <>
            <div className={'app_wrap'}>
                <Header/>
                <main className={'main_app_block'}>
                    <Router/>
                </main>
            </div>
        </>
    );
}

export default App;
