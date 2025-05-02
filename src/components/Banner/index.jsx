"use client";
const Banner = ({ title }) => {
    
    return (
        <div className="bg-gradient-to-l from-[#f2e2fa] to-[#e8f1ff] h-[10vh]">
            <div className="m-5 ml-10">
                <h1 className="font-semibold text-3xl">{ title }</h1>
            </div>
        </div>
    );

}

export default Banner;