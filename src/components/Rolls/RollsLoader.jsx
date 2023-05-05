import ContentLoader from "react-content-loader";

import React from "react";

function Skeleton() {
    return (
        <ContentLoader
            speed={0.5}
            width={216}
            height={300}
            viewBox="0 0 216 300"
            backgroundColor="#cccccc"
            foregroundColor="#ffffff"
        >
            <rect
                x="21"
                y="0"
                rx="9"
                ry="9"
                width="150"
                height="150"
            />
            <rect
                x="0"
                y="157"
                rx="20"
                ry="20"
                width="200"
                height="100"
            />
            <rect
                x="0"
                y="267"
                rx="7"
                ry="7"
                width="216"
                height="27"
            />
        </ContentLoader>
    );
}

export default Skeleton;
