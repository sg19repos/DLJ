import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    titleText: {
        fontFamily: "Cinzel"
    },
    dividerStyle: {
        backgroundColor: "#fc3",
        height: "2px",
        width: "15%"
    }
}));

const ItemTitle = ({ titleText }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <h4 className={classes.titleText}>{titleText}</h4>
        </Fragment>
    );
};

export default ItemTitle;
