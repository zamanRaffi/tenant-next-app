import PreventSection from "./component/PreventSection";
import WhyUs from "./component/WhyUs";
import Card from "./component/Card";
import OurRectReview from "./component/OurRectReview";
import PersonalStories from "./component/PersonalStories";
import Hero from "./component/Hero";


export default function Home() {
  return (



  <div className="overflow-hidden">
    
     <Hero></Hero>
      <Card></Card>
      <OurRectReview></OurRectReview>
      <PersonalStories></PersonalStories>
      <WhyUs></WhyUs>
      <PreventSection></PreventSection>

  </div>







  )
}
