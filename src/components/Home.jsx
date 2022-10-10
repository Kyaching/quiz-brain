import React from "react";
import Image from "../assets/hero-pic.jpg";

const Home = () => {
  return (
    <div>
      <section>
        <div className="mt-7 mx-7 card lg:card-side bg-base-100 shadow-xl justify-center">
          <figure>
            <img src={Image} className="w-[450px] h-52" alt="Album" />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title">Conquer the Quiz!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
        <section className="mt-14">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
