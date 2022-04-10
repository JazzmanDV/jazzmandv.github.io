import React from "react";

import "./index.css";

import { Helmet } from "react-helmet";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: "ru",
                }}
            >
                <meta charSet="utf-8" />
                <title>Резюме</title>
            </Helmet>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default IndexPage;
