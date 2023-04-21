import React, { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Tooltip } from 'antd';
import gibbon from '../data/assets/anchor/gibbon.png';
import tree from '../data/assets/anchor/tree.png';
import './anchor.less';

const BasicAnchor: React.FC = props => {
  useEffect(() => {
    anime({
      targets: '#fix_gibbon',
      rotate: [0, 50],
      loop: true,
      direction: 'alternate',
      duration: 2000,
      easing: 'steps(4)',
    });
  }, []);

  const styles = {
    tree: {
      position: 'absolute',
      width: '8vh',
      marginLeft: '-3px',
    },
    gibbon: {
      position: 'absolute',
      width: '4vh',
      transformOrigin: '0% 0%',
      marginLeft: '17px',
    },
  };

  return (
    <>
      <a href="/us/contact">
        <Tooltip placement="right" title="点击关注我们" color={'#8da745'}>
          <div
            style={{
              position: 'fixed',
              bottom: '100px',
              width: '7vh',
              marginLeft: '-24px',
            }}
          >
            <img style={styles.tree} src={tree}></img>
            <img id="fix_gibbon" style={styles.gibbon} src={gibbon}></img>
          </div>
        </Tooltip>
      </a>
    </>
  );
};

export default BasicAnchor;
