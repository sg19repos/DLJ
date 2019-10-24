import React from "react";

const GridImage = ({ src }) => {
    return (
        <img
            src={src}
            style={{ width: "60px", margin: "10% auto" }}
            alt="grid_image"
        ></img>
    );
};

export default GridImage;
