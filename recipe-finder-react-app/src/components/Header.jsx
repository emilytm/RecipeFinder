import React from "react";

export default function Header(){
    return (
        <div class="flex primary-header">
            <h1>Recipe Finder</h1>
            <button class="mobile-nav-toggle" aria-label="MENU"></button>
            <nav>
                <ul id="primary-navigation" data-visible="false" data-menu="menu" class="primary-navigation flex">
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./html/recipe.html?recipe=explore">EXPLORE</a></li>
                    <li><a href="#">LOG IN</a></li>
                    <li><a href="#">SIGN UP</a></li>
                </ul>
            </nav>
        </div>
    )
};