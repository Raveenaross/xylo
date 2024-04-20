/* eslint-disable react/no-unescaped-entities */
import './App.css'
import useSound from 'use-sound';
import sound1 from './assets/assets_note1.wav'
import sound2 from './assets/assets_note2.wav'
import sound3 from './assets/assets_note3.wav'
import sound4 from './assets/assets_note4.wav'
import sound5 from './assets/assets_note5.wav'
import sound6 from './assets/assets_note6.wav'
import sound7 from './assets/assets_note7.wav'
import sound8 from './assets/piano-bell.mp3'
function App() {
  const [playsound1] = useSound(sound1);
  const [playsound2] = useSound(sound2);
  const [playsound3] = useSound(sound3);
  const [playsound4] = useSound(sound4);
  const [playsound5] = useSound(sound5);
  const [playsound6] = useSound(sound6);
  const [playsound7] = useSound(sound7);
  const [playsound8] = useSound(sound8);
  return (
    <div className="grid-container">
      <div className="grid-item" onClick={playsound1}>
        <h1>Let's</h1>
      </div>
      <div className="grid-item" onClick={playsound2}>
        <h1>Have</h1>
      </div>
      <div className="grid-item" onClick={playsound3}>
        <h1>Fun</h1>
      </div>
      <div className="grid-item" onClick={playsound4}>
        <h1>With</h1>
      </div>
      <div className="grid-item" onClick={playsound5}>
        <h1>Music</h1>
      </div>
      <div className="grid-item" onClick={playsound6}>
        <svg fill="#FFFF00" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></g></svg></div>
      <div className="grid-item" onClick={playsound7}>
        <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF204E" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(12,12), scale(0)"><path transform="translate(-2.4, -2.4), scale(0.8999999999999999)" d="M16,31.607705608010292C18.122870833390554,31.980939500021314,20.19254621646303,30.709377291646383,22.115567376553372,29.735789221027808C23.989125292821903,28.787243425095774,25.62213765193475,27.486825693049095,27.095384479856428,25.990329058702216C28.60739594407042,24.454456030227973,30.801065518655424,22.98822550786593,30.878685047917457,20.834377826114427C30.96272253479068,18.502439614133404,27.717556583791673,17.11460093288198,27.498966795164918,14.791409888648786C27.276815411239365,12.430365903739215,30.56471413652421,10.301999438139376,29.680642376953667,8.101477440978803C28.856981942226604,6.0513238361535535,25.7941979235563,6.131552616987341,23.717169310155946,5.378227684286362C22.023962187951803,4.764112340302225,20.245127908778187,4.634091436956148,18.5379084600187,4.060079443895956C16.615595952959573,3.4137475184581776,14.976695801983912,1.4432352258505512,12.974527164188377,1.7662694012314528C10.997215097862158,2.0852931641446877,9.97756479571,4.325433661050561,8.501613744092356,5.679356724659183C7.161167732850173,6.9089779699937655,5.839233609331858,8.079784948117597,4.620208042067487,9.429874049765717C3.1846899869532477,11.019731829187112,1.295657534099413,12.346256180641504,0.6405054574919635,14.38565207204235C-0.031071755529681666,16.4761770934801,-0.030041650442782064,18.922989966168082,0.9373282509532039,20.89415872915626C1.9025510705225037,22.860952474250833,4.099041560356667,23.844907487637137,5.897065764311979,25.096722845088593C7.431130611268575,26.164765160938536,9.201141087559307,26.728881940086897,10.772358229667905,27.741475656963594C12.614263538126401,28.92851829571938,13.841827100845068,31.22826506075015,16,31.607705608010292" fill="#FFBFA9" strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#FFBFA9" strokeWidth="2.352"> <path d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z" fill="#FF204E"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z" fill="#FF204E"></path> </g></svg>
      </div>
      <div className='grid-item' onClick={playsound8}>
        <h1>Finale</h1>
      </div>
    </div>
  )
}

export default App
