import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="bg-[#212121] text-white font-nunito">
      <Header></Header>
      <div className="pt-28 ">
        <div className="h-[438px] bg-[#191919] px-28 flex justify-between justify-items-center">
          <div className="left my-auto text-white">
            <h1 className="text-4xl font-medium  leading-tight">
              At <span className="lettyai">LettyAI</span>, <br />
              We're changing the way
              <br /> the world works,
              <br /> and it's just the beginning.
            </h1>
            <h2 className="text-3xl py-6">Join us on our journey!</h2>
            <Button className="mt-7 rounded-[10px] text-lg bg-[#6E3FF2]">
              GET STARTED
            </Button>
          </div>
          <div className="right">
            <img src="../Assets/images/illustration 1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="relative py-5">
        <h2 className="text-center text-5xl pt-16 pb-16 font-bold">FEATURES</h2>
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
                src="../Assets/images/features-2.png"
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
                src="../Assets/images/features-3.png"
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
      <div className="pb-12">
        <h2 className="text-center text-5xl pt-[70px] pb-10 font-bold">
          PRICING
        </h2>
        <h4 className="text-4xl text-center pb-20">
          Access all that Letty Al has to offer for next to nothing
        </h4>
        <div className="flex justify-center  px-28 gap-14">
          <div className="w-[436px] bg-[#191919] rounded-[10px] price-box">
            <div className="py-5 px-10">
              <h4 className="text-center  leading-[6rem] text-4xl ">
                Letty - Full Access <br />
                $100/yr
              </h4>
              <ul className="list-disc text-3xl py-5">
                <li>Unlimited Text Generation</li>
                <li>Plagiarism Free Content</li>
                <li>Article Creation</li>
                <li>SEO Optimization</li>
                <li>Countless Use-Cases</li>
              </ul>
            </div>
            <Button
              className="rounded-none rounded-b-[10px] hover:border bg-[#6E3FF2]"
              fullWidth
            >
              Buy Now
            </Button>
          </div>
          <div className="w-[436px] bg-[#191919] rounded-[10px] price-box">
            <div className="py-5 px-10">
              <h4 className="text-center  leading-[6rem] text-4xl ">
                Letty - Full Access <br />
                $100/yr
              </h4>
              <ul className="list-disc text-3xl py-5">
                <li>Unlimited Text Generation</li>
                <li>Plagiarism Free Content</li>
                <li>Article Creation</li>
                <li>SEO Optimization</li>
                <li>Countless Use-Cases</li>
              </ul>
            </div>
            <Button
              className="rounded-none rounded-b-[10px] hover:border bg-[#6E3FF2]"
              fullWidth
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="relative py-64 px-10 h-[1200px] testimonial">
        <div className=" py-10 background flex gap-28 items-center">
          <div>
            <img
              className=""
              src="../Assets/images/testimonial-image.png"
              alt=""
            />
          </div>
          <div className="w-[600px]">
            <h2 className="text-5xl font-bold">lorem ispum</h2>
            <p className="text-3xl font-medium ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
      {/* ----footer----- */}
      <div className="flex justify-around px-20 bg-[#191919] py-10">
        <div>
          <h2 className="footer-logo">
            <span className="letty">Letty</span>AI
          </h2>
        </div>
        <div className="">
          <h3 className="text-4xl font-bold pb-6">
            @ 2022 Letty, Inc. All rights reserved.
          </h3>
          <h3 className="text-4xl font-bold pb-8">Contact : hello@letty.ai</h3>
          <ul className="hover: cursor-pointer ">
            <li className="text-xl text-[#3263E1] pb-2">TERMS OF SERVICE</li>
            <li className="text-xl text-[#3263E1]">PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <img
            className="hover:cursor-pointer"
            src="../Assets/images/instagram.png"
            alt=""
          />
          <img
            className="hover:cursor-pointer"
            src="../Assets/images/discord.png"
            alt=""
          />
          <img
            className="hover:cursor-pointer"
            src="../Assets/images/linkedin.png"
            alt=""
          />
          <img
            className="hover:cursor-pointer"
            src="../Assets/images/facebook.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
