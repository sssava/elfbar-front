import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <div className="col-3">
        <ContentLoader
            speed={2}
            width={300}
            height={520}
            viewBox="0 0 300 520"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="345" rx="10" ry="10" width="230" height="30" />
            <rect x="243" y="5" rx="4" ry="4" width="22" height="19" />
            <rect x="4" y="28" rx="5" ry="5" width="257" height="304" />
            <rect x="0" y="390" rx="10" ry="10" width="275" height="22" />
            <rect x="10" y="437" rx="10" ry="10" width="104" height="40" />
            <rect x="192" y="422" rx="10" ry="10" width="60" height="50" />
        </ContentLoader>
    </div>

)

export default Skeleton