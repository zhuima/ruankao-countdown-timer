import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // const timeToDays = 80 * 60 * 60 * 24 * 1000;
  // let countDownDate = new Date().getTime() + timeToDays;

  let countDownDate = new Date("2023/5/27").getTime();
  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);
  return (
    <body>
      <div className="bg-[url('/assets/bg-stars.svg')] h-[78vh] desktop:h-[83vh] bg-fit">
        {/* <h1 className="font-['Red Hat Text'] font-bold text-white text-[8xl] md:text-lg desktop:text-[22px] w-[327px] desktop:w-[431px] tracking-[6.14px] text-center mx-auto mt-[142px] mb-[54px] desktop:mt-[132px] desktop:mb-[104px]"> */}
        <h1 className="font-['Red Hat Text'] font-bold text-white text-8xl tracking-[6.14px] text-center mx-auto mt-[142px] mb-[54px] ">
          软 考 倒 计 时
        </h1>
        <Counter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <div className="absolute bottom-0 h-[194px] w-full bg-[center_right_-11rem] desktop:bg-cover desktop:bg-center bg-no-repeat bg-[url('/assets/pattern-hills.svg')]"></div>
        {/* <Footer /> */}
      </div>
    </body>
  );
}

export default App;
