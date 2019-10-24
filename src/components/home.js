import React, { Fragment } from "react";
import Footer from "./common/footer";
import Header from "./common/header";
import FooterStyles from "./styles/footerStyles";
import Content from "./common/content";
import ContentStyles from "./styles/contentStyles";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <ContentStyles>
                <Router style={{ height: "100%" }}>
                    <Header />
                    <Content />
                    <FooterStyles>
                        <Footer />
                    </FooterStyles>
                </Router>
            </ContentStyles>
        </Fragment>
    );
};

export default Home;
