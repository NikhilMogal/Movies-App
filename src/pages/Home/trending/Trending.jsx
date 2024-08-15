import React,{useState} from 'react'
import ContentWrapperr from '../../../components/contentWrapper/ContentWrapperr'
import Switchtabs from '../../../components/switchTabs/Switchtabs'
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

  return (
    <div className='carouselSection'>
     <ContentWrapperr>
        <span className="carouselTitle">
            Trending
        </span>
        <Switchtabs data={["Day", "Week"]} onTabChange={onTabChange} />
     </ContentWrapperr>
     <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending
