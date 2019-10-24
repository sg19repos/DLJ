import React, { Fragment } from "react";
import PaperContainer from "./paperContainer";
import HomeScreenStyles from "../styles/homeScreenStyles";
import IndividualCategories from "./individualCategories";
// import WeddingCollectionsCard from "./weddingCollectionsCard";
import WeddingCollectionsCard2 from "./weddingCollectionsCard2";
import SilverbarCard from "./silverbarCard";
import SeeAllCollections from "./seeAllCollection";

const HomeScreen = () => {
    return (
        <Fragment>
            <HomeScreenStyles>
                <div>
                    <div className="homeScreenPapers">
                        <PaperContainer />
                    </div>
                    <div className="homeScreenPapers">
                        <IndividualCategories />
                    </div>
                    <div className="homeScreenPapers">
                        <WeddingCollectionsCard2 />
                    </div>
                    <div className="homeScreenPapers">
                        <SilverbarCard />
                    </div>
                    <div className="homeScreenPapers">
                        <SeeAllCollections />
                    </div>
                </div>
            </HomeScreenStyles>
        </Fragment>
    );
};

export default HomeScreen;
