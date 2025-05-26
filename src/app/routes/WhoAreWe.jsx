import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import WhoAreWePageSection from "../components/whoAreWePageSection/whoAreWePageSection";
import WhoAreWeSBSSection from "../components/whoAreWeSBSSection/whoAreWeSBSsection";
import WhoAreWeGetInTouch from "../components/getInTouchInWhoAreWe/whoAreWeGetInTouch";

import firstSectionImage from '../../assets/photos/whoAreWe/1.jpeg';
import secondSectionImage from '../../assets/photos/whoAreWe/home.jpeg';
import thirdSectionImage from '../../assets/photos/whoAreWe/3.jpeg';
import fourthSectionImage from '../../assets/photos/whoAreWe/4.jpeg';

const WhoAreWe = () => {

  const sectionContent = {
    first: {
      heading: 'SBS, your Sagnse Beauty Supply',
      explaining: `At Sagnse, we are committed to inclusivity and diversity. We believe that beautiful hair transcends cultural boundaries and should be celebrated in all its forms. Whether you're looking for a quick and easy style, something customizable, braided, woven, nappy, dreads, pink, red, blonde, or something else, no matter your uniqueness, skin tone, size, style, or background...the Sagnse Beauty Supply concept is made for you!`
    },
    second: {
      heading: 'Sagnse, your beauty partner',
      explaning: `More than just a hair brand and a small neighborhood salon of its beginnings, Sagnse has worked all along, inspired by its Afro-Senegalese essence, and to transform her initial vision of beauty into a complete offer of services and products. Sagnse defines itself today as a lifestyle, that of the 1 address, several choices...thus becoming the beauty partner, which speaks and invites the women of this world to live a unique experience, that of DAMN YOU POPPIN.`
    },
    third: {
      heading: 'Your hair partner',
      explaning: `Passionate about the world of beauty and hair, as well as all the possibilities hair can offer, Sagnse's vision is a new one, one that envisions a self-expression accessory with multiple potentials for the image we want to express and project.

                  Yes, ladies... In a world of constant renewal, especially in fashion, clothing, shoes, and accessories are constantly evolving, and the same is true for hair trends.`
    },
    fourth: {
      heading: '',
      explaning: `Sagnse hair isn't just hair, it's a true and beautiful fashion and beauty accessory.
                  With an African essence and inspirations from around the world, the Sagnse brand embraces subtle extravagance by marketing an uninhibited, free, and humble hair collection, conveyed by a distinctive and avant-garde signature: DAMN YOU POPPIN!`
    }
  }

  return (
    <>
      <PageHeader heading={t('page_header_who_are_we.heading')} description={t('page_header_who_are_we.description')} />
      <WhoAreWePageSection imageSource={firstSectionImage} imageSide='left' headingContent={sectionContent.first.heading} explainingContent={sectionContent.first.explaining} />
      <WhoAreWeSBSSection />
      <div style={{ background: 'rgba(239, 230, 253, 0.50)' }}>
        <WhoAreWePageSection imageSource={secondSectionImage} headingContent={sectionContent.second.heading} explainingContent={sectionContent.second.explaning} imageSide='right' noButton={true} />
        <WhoAreWePageSection imageSource={thirdSectionImage} headingContent={sectionContent.third.heading} explainingContent={sectionContent.third.explaning} imageSide='left' noButton={true} />
        <WhoAreWePageSection imageSource={fourthSectionImage} headingContent={sectionContent.fourth.heading} explainingContent={sectionContent.fourth.explaning} imageSide='right' noButton={true} />
      </div>
      <WhoAreWeGetInTouch />
    </>
  )

}

export default WhoAreWe;