import React, { useState } from 'react';

// import CardForm from '../pages/__/tips/CardForm.js';
import HeadlessModal from '../utils/HeadlessModal';

function TipPortal() {

  const [descriptionOn, setdescriptionOn] = useState(false);
  const [active, setActive] = useState(0);
  const [items] = useState([
    {
      // user-1.jpg
      size: '48', // image width / height
      style: { maxWidth: '7.08%', top: '29%', left: '2%' }, // image absolute  positioning
      description: '2. 🙌', // description to be displayed on hover,
      amount: '1.00',
    },
    {
      // user-2.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '60%', left: '2%' },
      description: '1',
      // name: 'Justice Porter',
    },
    {
      // user-3.jpg
      size: '72',
      style: { maxWidth: '10.62%', top: '43%', left: '13%' },
      description: '1.',
      name: 'Leonel Roy',
    },
    {
      // user-4.jpg
      size: '56',
      style: { maxWidth: '8.26%', top: '75%', left: '14%' },
      description: '5',
      // name: 'Daniel Wolf',
    },
    {
      // user-5.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '11%', left: '15%' },
      description: '10',
      // name: 'Seamus Miranda',
    },
    {
      // user-6.jpg
      size: '80',
      style: { maxWidth: '11.8%', top: '32%', left: '30%' },
      description: '10',
      // name: 'Fiona Schultz',
    },
    {
      // user-7.jpg
      size: '50',
      style: { maxWidth: '7.37%', top: '65%', left: '30%' },
      description: '10',
      // name: 'Monica Evans',
    },
    {
      // user-8.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '6%', left: '33%' },
      description: '20',
      // name: 'Jakayla Dunlap',
    },
    {
      // user-9.jpg
      size: '44',
      style: { maxWidth: '6.49%', top: '77%', left: '44%' },
      description: '20',
      // name: 'Mattie Sharp',
    },
    {
      // user-10.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '48%', left: '46%' },
      description: '20',
      // name: 'Jazmyn Gaines',
    },
    {
      // user-11.jpg
      size: '72',
      style: { maxWidth: '10.62%', top: '16%', left: '46%' },
      description: '50',
      // name: 'Patrick Christensen',
    },
    {
      // user-12.jpg
      size: '64',
      style: { maxWidth: '9.44%', top: '65%', left: '58%' },
      description: '50',
      // name: 'Mike Johnson',
    },
    {
      // user-13.jpg
      size: '80',
      style: { maxWidth: '11.8%', top: '32%', left: '62%' },
      description: '100',
      // name: 'Lyla Griffith',
    },
    {
      // user-14.jpg
      size: '48',
      style: { maxWidth: '7.08%', top: '6%', left: '63%' },
      description: '100',
      // name: 'Damien Mclaughlin',
    },
    {
      // user-15.jpg
      size: '24',
      style: { maxWidth: '3.54%', top: '93%', left: '65%' },
      description: '5',
      // name: 'Perry Mason',
    },
    {
      // user-16.jpg
      size: '36',
      style: { maxWidth: '5.31%', top: '86%', left: '76%' },
      description: '5',
      // name: 'Briana Friedman',
    },
    {
      // user-17.jpg
      size: '44',
      style: { maxWidth: '6.49%', top: '59%', left: '76%' },
      description: '100',
      // name: 'Manuel Kirk',
    },
    // {
    //   // user-18.jpg
    //   size: '72',
    //   style: { maxWidth: '10.62%', top: '14%', left: '78%' },
    //   description: 'And it is a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there.',
    //   name: 'Cedric Reynolds',
    // },
    // {
    //   // user-19.jpg
    //   size: '64',
    //   style: { maxWidth: '9.44%', top: '40%', left: '89%' },
    //   description: 'I ought to just try that with my boss.',
    //   name: 'Gracelyn Wilcox',
    // },
    // {
    //   // user-20.jpg
    //   size: '24',
    //   style: { maxWidth: '3.54%', top: '74%', left: '91%' },
    //   description: 'It was half past six and the hands were quietly moving forwards, it was even later than half past.',
    //   name: 'Jamir Henson',
    // },
  ]);

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="relative">

            <div aria-hidden="true" className="absolute inset-0 h-128 pt-16 box-content -z-1">
              <img className="flex flex-grow object-cover opacity-10" src={require('../images/clover-background.svg').default} layout="fill" alt="Clover Background" />
            </div>

            <HeadlessModal />

            {/* Background image */}
            {/* <svg className="mx-auto" viewBox="0 0 678 346" xmlns="http://www.w3.org/2000/svg">
               <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="circle_b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
                <linearGradient x1="50%" y1="50%" x2="50%" y2="89.386%" id="circle_a">
                  <stop stopColor="#2E2E33" offset="0%" />
                  <stop stopColor="#C99700" stopOpacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle className="opacity-10 dark:opacity-100" fill="url(#circle_a)" opacity=".32" cx="339" cy="173" r="173" />
                <circle fill="url(#circle_b)" opacity=".32" cx="339" cy="173" r="140" />
              </g>
            </svg> */}

            {/* People pics */}
            <div>
              {items.map((item, index) => (
                <img key={index} className="absolute rounded-full z-10 cursor-pointer animate-float hover:bounce" style=  {item.style} src={require(`../images//user-${index + 1}.svg`).default} width={item.size} height={item.size} alt={`User ${index + 1}`} onMouseEnter={() => { setActive(index); setdescriptionOn(true); }} onMouseLeave={() => setdescriptionOn(false)} />
              ))}
            </div>

            {/* description box */}
            <div className={`opacity-0 transition duration-150 ease-in-out absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 max-w-xs w-full p-3 bg-gray-800 dark:bg-gray-800 text-center shadow-2xl z-20 pointer-events-none ${descriptionOn && 'dark:opacity-100 opacity-100'}`}>
              <div className="text-gray-600 dark:text-gray-400 mb-1">{items[active].description}</div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">{items[active].name}</div>
            </div>

            {/* Floating Stripe Card */}
            {/* <div>
              <CardForm />
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default TipPortal;