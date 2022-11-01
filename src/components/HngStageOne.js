import React from 'react'
import profile__img from '../HngImg/profile__img.png'
import github from '../HngImg/github.png'
import slack from '../HngImg/slack.png'
import I4G from '../HngImg/I4G.png'
import zuriLogo from '../HngImg/zuriLogo.png'
import './HngStyles.css'

function HngStageOne() {
  return (
    <div className='container'>
        <div className='Profile'>
            <img className='profilepicture' id='profile__img' src={profile__img} alt='profile__img'></img>
            <p className='profile_p' id='twitter'>@Mo_diyyah</p>
            <p className='slack_p' id='slack_id'>Rodiyyah</p>
        </div>
        <div className='links'>
          <div className='anchorLinks'>
            <a className='aLinks' href="https://twitter.com/Mo_Diyyah?s=20&t=5RxJpLViYUFTlHeheBLXxw" id='twitter'>
              <p>Twitter</p>
            </a>
          </div>

          <div className='anchorLinks'>
            <a className='aLinks' href="https://training.zuri.team/" id='btn__zuri'>
              <p>Zuri Team</p>
            </a>
          </div>
          <div className='anchorLinks'>
            <a className='aLinks' href="http://books.zuri.team" id='books'>
              <p>Zuri Books</p>
            </a>
          </div>
          
          <div className='anchorLinks'>
            <a className='aLinks' href="https://books.zuri.team" id='book__python'>
              <p>Python Book</p>
            </a>
          </div>
          
          <div className='anchorLinks'>
            <a className='aLinks' href="https://background.zuri.team" id='pitch'>
              <p>Background Check for Coders</p>
            </a>
          </div>
          <div className='anchorLinks'>
            <a className='aLinks' href="https://books.zuri.team/design-rules" id='book__design'>
              <p>Design Books</p>
            </a>
          </div>
        </div>
        <div className='logos'>
          <img className='slackImg' src={slack} alt='slack_logo'></img>
          <img className='githubImg' src={github} alt='githubImg'></img>
        </div>
        <div className='footer'>
          <img className='footerzuri' src={zuriLogo} alt='zuri_logo'></img>
          <p className='footerContent'>HNG Internship 9 Frontend Task</p>
          <img className='footerContent' src={I4G} alt='I4G_logo'></img>
        </div>
    </div>
  )
}

export default HngStageOne