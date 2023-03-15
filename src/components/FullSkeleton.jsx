import React from "react"
import ContentLoader from "react-content-loader"

const FullSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={1500}
        height={600}
        viewBox="0 0 1500 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="291" y="22" rx="10" ry="10" width="230" height="30" />
        <rect x="293" y="116" rx="10" ry="10" width="88" height="19" />
        <rect x="294" y="72" rx="10" ry="10" width="79" height="30" />
        <rect x="298" y="176" rx="10" ry="10" width="67" height="59" />
        <rect x="3" y="12" rx="0" ry="0" width="247" height="443" />
        <rect x="387" y="118" rx="10" ry="10" width="105" height="16" />
    </ContentLoader>
)

export default FullSkeleton