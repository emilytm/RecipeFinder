import React from "react";

export default function Search() {
    return (
        <div class="hero">
            <h3>by emilytm</h3>
            <form class="search" id="search">
                <input id="searchbox" class="searchbox" type="search" name="search" placeholder="Search by ingredient, source, tag, or name"/>
                <button class="search-btn">GO</button>
            </form>
        </div>
    )
};