import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CenterImageCard from "./centerImageCard";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2, 2, 2),
        height: "auto",
        borderBottom: "4px solid #fc3",
        marginBottom: "6%"
    },
    paragraph: {
        textAlign: "left",
        borderBottom: "1px dotted #ddd"
    }
}));

export default function WeddingCollectionsCard2() {
    const classes = useStyles();
    const weddingCollectionIcon1 = "icon_wedding2.png";

    return (
        <div>
            <Paper className={classes.root}>
                {/* <p className={classes.paragraph}>Wedding collections</p> */}
                <CenterImageCard src={weddingCollectionIcon1} />
                {/* <CategoriesButtons /> */}
            </Paper>
        </div>
    );
}
