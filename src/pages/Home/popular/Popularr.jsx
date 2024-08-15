import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapperr from "../../../components/contentWrapper/ContentWrapperr";
import SwitchTabs from "../../../components/switchTabs/Switchtabs";

import useFetch from "../../../hooks/useFetch";

const Popularr = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapperr>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapperr>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popularr;