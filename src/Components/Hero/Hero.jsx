
const Hero = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/d0GQgCXK/hero-img.png)] bg-cover bg-center flex flex-col justify-center items-center text-white text-center space-y-4 container mx-auto mt-12 p-12 h-[600px] rounded-[24px]">
            <h2 className="text-5xl font-bold leading-[76px]">Discover an exceptional cooking <br />class tailored for you!</h2>
            <p className="text-[18px] font-normal leading-8">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="space-x-4 mt-10">
                <button className="btn bg-[#0BE58A] text-black px-8 py-5 rounded-full text-[20px] font-semibold cursor-pointer">Explore Now</button>
                <button className="btn border-white border px-8 py-5 rounded-full text-[20px] font-semibold cursor-pointer">Our Feedback</button>
            </div>
        </div>
    );
};

export default Hero;