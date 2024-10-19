import PreventSection from "./component/PreventSection";
import WhyUs from "./component/WhyUs";
import Card from "./component/Card";
import OurRectReview from "./component/OurRectReview";
import PersonalStories from "./component/PersonalStories";
import Hero from "./component/Hero";
import { RatingProvider } from './component/RatingContext'

export default function Home() {
  return (



  <div className=" overflow-hidden">
    
  <RatingProvider> 

      <Hero></Hero>
      <Card></Card>
      <OurRectReview></OurRectReview>
      <PersonalStories></PersonalStories>
      <WhyUs></WhyUs>
      <PreventSection></PreventSection>
      
  </RatingProvider>

  </div>







  )
}
