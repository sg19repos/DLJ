import React, { Fragment } from "react";
import Screen1 from "../screen1";
import Favorites from "../favorites";
import HomeScreen from "../homeScreen";
import Screen4 from "../screen4";
import Screen5 from "../screen5";
import { Switch, Route } from "react-router-dom";
import Categories from "../categoryPages";
import ItemDetailView from "../common/itemDetailView";
import ContentStyles from "../styles/contentStyles";

const Content = () => {
    return (
        <Fragment>
            <ContentStyles>
                <Switch>
                    <Route path="/screen1">
                        <Screen1 />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/home">
                        <HomeScreen />
                    </Route>
                    <Route path="/screen4">
                        <Screen4 />
                    </Route>
                    <Route path="/screen5">
                        <Screen5 />
                    </Route>
                    {/* <Route path="/categories/">
                        {console.log(window.location.search)}   
                        <Categories
                            gallerySelection={
                                window.location.search.split("?name=")[1]
                            }
                        />
                    </Route> */}
                    <Route path="/categories/" component={Categories} />
                    <Route path="/itemDetails">
                        <ItemDetailView />
                    </Route>
                </Switch>
            </ContentStyles>
        </Fragment>
    );
};

export default Content;
