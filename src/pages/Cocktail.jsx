import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const Cocktail = () => {
    useLoaderData();
    return <Wrapper>Cocktail</Wrapper>;
};

export default Cocktail;
