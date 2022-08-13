import React from 'react';
import { Routes } from "react-router-dom"
import { NavLink, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <NavLink to="about-app" style={({ isActive }) => ({
                        color: isActive ? '#ffc600' : '#0077b6',
                    })}>About App</NavLink>
                </li>
                <li>
                    <NavLink to="about-author" style={({ isActive }) => ({
                        color: isActive ? '#ffc600' : '#0077b6',
                    })}>About Author</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/:slug" element={
                    <SinglePage />
                } />
            </Routes>
        </div>
    )
}

export default About;