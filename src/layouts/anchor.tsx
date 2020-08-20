import React, { useEffect } from 'react';
import gibbon from '../public/gibbon.png';
import { Link } from 'umi';
import anime from 'animejs/lib/anime.es.js';
import { Tooltip } from 'antd';


const BasicAnchor: React.FC = (props) => {

  useEffect(() => {
    anime({
      targets: '#fix_gibbon',
      rotate: [-10, 10],
      loop: true,
      direction: 'alternate',
      duration: 2000,
      easing: 'steps(4)',
    })
  }, []);

  return (
    <Tooltip placement="rightTop" title="点击关注我们" color={'#8da745'}>
      <div style={{position: 'fixed', bottom: '20px', left: '20px'}}>
        <Link to='/contact'>
          <img id='fix_gibbon' style={{height: '10vh', rotate: '-15', transformOrigin: '50% 0%'}} src={gibbon}></img>
        </Link>
      </div>
    </Tooltip>
  )
}

export default BasicAnchor;
