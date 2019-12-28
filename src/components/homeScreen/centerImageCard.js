import React, { Fragment } from "react";
import ItemTitle from "./itemTitle";

const CenterImageCard = ({ src }) => {
    return (
        <Fragment>
            <div className="centerImageContainer">
                <img
                    src={src}
                    style={{
                        width: "100%",
                        margin: "10% auto 10% 0%",
                        float: "center"
                    }}
                    alt="Wedding Collections"
                ></img>
                <ItemTitle titleText="Wedding Collections" />
            </div>
        </Fragment>
    );
};

export default CenterImageCard;
