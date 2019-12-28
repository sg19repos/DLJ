import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { tileDataEarRings, tileDataRings } from "./tileData";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import handleFavClick from "../../services/setFavorites";

const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "90%",
        height: "auto",
        marginBottom: "15% !important"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    favIcon: {
        position: "absolute",
        top: "2%",
        right: "2%",
        color: "#999"
    },
    catImage: {
        width: "65%",

        left: "35% !important"
    }
}));

export default function TitlebarGridList({ gallerySelection }) {
    const classes = useStyles();
    let tileData = [];
    gallerySelection === "rings"
        ? (tileData = tileDataRings)
        : (tileData = tileDataEarRings);

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {tileData.map(tile => (
                    <Link
                        key={tile.img}
                        to={{
                            pathname: "/itemDetails",
                            search: `?img=${tile.img}&modelNo=${tile.modelNo}&itemName=${tile.title}&itemCategory=${tile.category}`
                        }}
                        style={{
                            padding: "0px",
                            margin: "1%",
                            width: "48%",
                            color: "#f2f2f2"
                        }}
                    >
                        <GridListTile
                            key={tile.img}
                            id={tile.modelNo}
                            style={{
                                height: "-webkit-fill-available",
                                border: "1px solid #fc3",
                                borderTop: "none",
                                borderLeft: "none",
                                padding: "10%",
                                boxShadow:
                                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                            }}
                            onClick={() =>
                                history.push({
                                    pathname: "/itemDetails",
                                    search: `?img=${tile.img}`
                                })
                            }
                        >
                            <img
                                className={classes.catImage}
                                src={tile.img}
                                alt={tile.title}
                                width="30%"
                                height="70%"
                            />
                            <FavoriteBorderRoundedIcon
                                onClick={() => handleFavClick(tile.modelNo)}
                                className={classes.favIcon}
                            />

                            {/* <GridListTileBar
                                style={{
                                    height: "20%",
                                    color: "#fc3",
                                    fontFamily: "calibri"
                                }}
                                title={tile.title}
                            /> */}
                            <h5
                                style={{
                                    color: "#999",
                                    fontFamily: "calibri",
                                    margin: "1% auto",
                                    position: "absolute",
                                    top: "65%",
                                    left: "35%"
                                }}
                            >
                                {tile.title}
                            </h5>
                            <h3
                                style={{
                                    color: "#555",
                                    fontFamily: "calibri",
                                    margin: "2% auto",
                                    position: "absolute",
                                    top: "80%",
                                    left: "35%"
                                }}
                            >
                                ₹400
                            </h3>
                        </GridListTile>
                    </Link>
                ))}
            </GridList>
        </div>
    );
}
