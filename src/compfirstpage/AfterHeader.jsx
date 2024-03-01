import React from 'react';
import Textspan from './Textspan';
import ParticleBackground from './ParticleBackground';

const AfterHeader = () => {
  const sentenceone = `Hey there`.split('');
  const sentencetwo = ` I'm Tarun Kale, a Front-End Developer`.split('');

  return (
    <>
     <ParticleBackground />
     <div className='flex'>
     <div className='ml-2'>
      <div className='flex flex-col items-start text-white bg-black mt-20'>
      
        <div className='pl-4 text-7xl'>
          {sentenceone.map((Eachchar, index) => (
            <Textspan key={index}>
              {Eachchar === " " ? "\u00A0" : Eachchar}
            </Textspan>
          ))}
        </div>
        <div className='pt-2 pl-2 text-5xl   '>
          {sentencetwo.map((Eachchar, index) => (
            <Textspan key={index}>
              {Eachchar === " " ? "\u00A0" : Eachchar}
            </Textspan>
          ))}
        </div>
        <h1 className='text-xl font-mono pl-5 pt-2'>
          I craft stunning web experiences using <span className='text-red-500'>React.js, Next.js</span> and other
          <br />
          cutting-edge tools. Passionate about <span className='text-green-500'> open source</span>, I'm always eager
          <br />
          to contribute and collaborate. Check out my projects below and let's
          <br /> turn your web dreams into reality!
        </h1>
      </div>
      <div className='relative mt-4 bottom-0 left-0 flex'>
  <img src="github.svg" className='w-16 h-16 mx-8 cursor-pointer absolute left-48 transition duration-300 transform hover:scale-110' alt="" />
  <img src="linkdin.png" className='w-16 h-16 mx-8 left-72 cursor-pointer absolute transition duration-300 transform hover:scale-110' alt="" />
</div>
</div>
   <div className="relative w-72 h-72">
  <img
    src="myphoto.jpeg"
    alt=""
    className="rounded-full absolute animate-bounce"
    style={{ top: '50%', transform: 'translateY(-50%)' }}
  />
</div>
</div>
    </>
  );
};

export default AfterHeader;
