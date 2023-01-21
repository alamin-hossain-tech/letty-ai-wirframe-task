import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="bg-[#212121] text-white">
      <Header></Header>
      <div className="pt-28 ">
        <div className="h-[438px] bg-[#191919] px-28 flex justify-between justify-items-center">
          <div className="left my-auto text-white">
            <h1 className="text-4xl ">
              At LettyAI, <br />
              We're changing the way
              <br /> the world works,
              <br /> and it's just the beginning.
            </h1>
            <h2 className="text-3xl py-6">Join us on our journey!</h2>
            <Button className="mt-7">GET STARTED</Button>
          </div>
          <div className="right">
            <img src="../Assets/images/illustration 1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="relative py-5">
        <h2 className="text-center text-5xl pt-16 pb-16">FEATURES</h2>
        <img
          className="absolute top-5 right-5 border-2 rounded-full p-1 img-people"
          src="../Assets/images/Vector-revised.png"
          alt=""
        />
        <div className="flex px-28 gap-5">
          <div className="bg-[#191919] flex-1 p-10 rounded-[10px] ">
            <div>
              <img
                className="mx-auto pb-16"
                src="../Assets/images/features-1.png"
                alt=""
              />
            </div>
            <p className="text-3xl text-center pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="bg-[#191919] flex-1 p-10">
            <div>
              <img
                className="mx-auto pb-16"
                src="../Assets/images/features-1.png"
                alt=""
              />
            </div>
            <p className="text-3xl text-center pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="bg-[#191919] flex-1 p-10 ">
            <div>
              <img
                className="mx-auto pb-16"
                src="../Assets/images/features-1.png"
                alt=""
              />
            </div>
            <p className="text-3xl text-center pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
