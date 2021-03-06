import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import GridImage from "./image";
import CategoriesButtons from "./openCategoriesButton";
import ItemTitle from "./itemTitle";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2, 2, 2),
        borderBottom: "4px solid #fc3",
        marginBottom: "6%"
    },
    paragraph: {
        textAlign: "left",
        borderBottom: "1px dotted #ddd",
        fontFamily: "Cinzel"
    }
}));

export default function IndividualCategories() {
    const classes = useStyles();
    const jewellerySetImage1 = "icon_jewelleryset1.jpeg";
    const jewellerySetImage4 = "icon_jewelleryset4.png";
    const jewellerySetImage5 = "icon_jewelleryset5.jpeg";
    const jewellerySetImage6 = "icon_jewelleryset6.jpg";
    const jewellerySetImage7 = "icon_jewelleryset7.jpg";

    return (
        <div>
            <Paper className={classes.root}>
                {/* <p className={classes.paragraph}>Jewellery set</p> */}
                <GridImage src={jewellerySetImage1} alt="jewellery_set" />
                <GridImage src={jewellerySetImage7} alt="jewellery_set" />
                <GridImage src={jewellerySetImage4} alt="jewellery_set" />
                <GridImage src={jewellerySetImage5} alt="jewellery_set" />
                <GridImage src={jewellerySetImage6} alt="jewellery_set" />
                <ItemTitle titleText="Jewellery Set" />
            </Paper>
        </div>
    );
}
