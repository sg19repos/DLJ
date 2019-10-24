import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImageGrid from "./imageGrid";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        borderBottom: "4px solid #fc3",
        marginBottom: "6%"
    }
}));

export default function PaperContainer() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <ImageGrid />
            </Paper>
        </div>
    );
}
