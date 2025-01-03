import "./aboutPage.scss";
import BannerImage from '../../components/banner-image/BannerImage.jsx'
import BannerImg from '/assets/about-banner.png?url'

const AboutPage = () => {
  return (
    <div>
      <BannerImage img={BannerImg} />
      AboutPage
    </div>
  );
};

export default AboutPage;