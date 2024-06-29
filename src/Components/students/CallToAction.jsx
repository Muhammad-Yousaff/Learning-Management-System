import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col item-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1>Learn anything,anytime,anywhere</h1>
      <p>Incididunt sint fugiat pariatur cupidatat consectetur sit
     collum anim id veniam aliqua proident excepteur commodo do ea

      </p>
      <div>
        <button>Get started</button>
        <button>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CallToAction
