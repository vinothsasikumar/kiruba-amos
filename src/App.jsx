import React from 'react';
import Countdown from "react-countdown";

import './App.scss';

const App = () => {

  var marriageDate = new Date(2022, 9, 12, 16, 0, 0, 0);
  var today = new Date();
  var diff = marriageDate.getTime() - today.getTime();

  var timeRemaining = Math.abs(diff);

  const CompletionText = () => <span className='text-base font-semibold uppercase tracking-wide font-poppins'>are officially married!</span>;

  const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <CompletionText />;
    } else {
      return (
        <div className='flex flex-row w-full lg:w-6/12 justify-evenly items-center font-poppins'>
          <div className='flex flex-col justify-between items-center'>
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div className='flex flex-col justify-between items-center'>
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div className='flex flex-col justify-between items-center'>
            <span>{minutes}</span>
            <span>Minutes</span>
          </div>
          <div className='flex flex-col justify-between items-center'>
            <span>{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className='w-full h-full flex justify-center'>
        <header className='w-full h-full absolute -z-50'>
          <div className='slides'>
            <div className='slide'>
              <img src={require('./assets/images/1.jpg')} alt='' className='slide-image' />
            </div>
            <div className='slide slide-2'>
              <img src={require('./assets/images/2.jpg')} alt='' className='slide-image' />
            </div>
            <div className='slide slide-3'>
              <img src={require('./assets/images/3.jpg')} alt='' className='slide-image' />
            </div>
            <div className='slide slide-4'>
              <img src={require('./assets/images/4.jpg')} alt='' className='slide-image' />
            </div>
          </div>
        </header>
        <div className='w-full h-screen z-0 opacity-95 overflow-x-hidden overflow-y-auto'>
          <section className='h-screen flex flex-col text-white justify-evenly items-center'>
            <img src={require('./assets/images/icon.png')} className='w-1/2 lg:w-1/6' />
            <div className="flex w-full lg:w-6/12 items-center p-4">
              <div className="flex-grow w-4 lg:w-2/12 h-px bg-white"></div>
              <span className='text-base font-semibold uppercase mx-5 tracking-wide font-poppins'>
                The Wedding of
              </span>
              <div className="flex-grow w-4 lg:w-2/12 h-px bg-white"></div>
            </div>
            <span className='text-6xl lg:text-8xl tracking-wide font-great-vibes'>
              Kiruba &#38; Amos
            </span>
            <Countdown date={Date.now() + timeRemaining} renderer={Renderer} />
          </section>
          <section className='h-1/6'>

          </section>
        </div>
      </div>
    </>
  );
}

export default App;
