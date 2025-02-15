import axios from "axios";
import React from "react";
import { Outlet, useLoaderData } from "react-router";
import CocktailList from "../components/CocktailList";
const cocktailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
    const searchQuery = "margarita";
    const response = await axios.get(`${cocktailSearchUrl}${searchQuery}`);

    return { drinks: response.data.drinks, searchQuery };
};

const Landing = () => {
    const { drinks, searchQuery } = useLoaderData();
    console.log(drinks);
    return (
        <>
            <CocktailList drinks={drinks} />
        </>
    );
};

export default Landing;
