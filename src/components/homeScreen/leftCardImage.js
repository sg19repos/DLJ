import React from "react";

const LeftImage = ({ src }) => {
    return (
        <img
            src={src}
            style={{
                width: "60px",
                margin: "10% auto 10% 0%",
                float: "left"
            }}
            alt="card_image"
        ></img>
    );
};

export default LeftImage;
