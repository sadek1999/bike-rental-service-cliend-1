import Button1 from "../../Components/ui/Button1";
import Banner from "../../Components/ui/home/Banner";
import BikeList from "../../Components/ui/home/BikeList";
import ContactUs from "../../Components/ui/home/ContactUs";
import Review from "../../Components/ui/home/Review";
import WhyChooseUs from "../../Components/ui/home/whyChousUs";
import { useGetAllBikesQuery } from "../../redux/features/bike/bikeApi";



const Home = () => {
    const {data}=useGetAllBikesQuery(undefined);
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center text-[#0bba48] "> ------ out bikes ----</h1>
           <BikeList></BikeList>
           <Review></Review>
          <WhyChooseUs></WhyChooseUs>
           <ContactUs></ContactUs>
        
        <h1></h1>

           <Button1 name={'Home'} link={'/home'}></Button1>
       
        </div>
    );
};

export default Home;