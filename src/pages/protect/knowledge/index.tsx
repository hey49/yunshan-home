import React, { useState } from 'react';
import './index.less';
import data from './knowledge';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App">
      <div className="image-container">
        <button className="image-btn image-btn-left" onClick={prevImage}>
          {'<'}
        </button>

        <img
          src={data[currentIndex].src}
          alt={`Sample ${currentIndex + 1}`}
          className="displayed-image"
        />

        <button className="image-btn image-btn-right" onClick={nextImage}>
          {'>'}
        </button>
      </div>
      <div className="image-navigation">
        {data.map((_, index) => (
          <span
            key={index}
            className={`image-number ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <div className="content">
        <h3>更多内容：</h3>

        <a
          href="https://mp.weixin.qq.com/s/OLo5wNXftnFPzZ1Y6WoBAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          好故事看几遍不嫌多 | 天行长臂猿命名人范朋飞首次公开讲述发现历程 （上）
        </a>

        <a
          href="https://mp.weixin.qq.com/s/YhwOTzDsZb1swpGvT-cnfw"
          target="_blank"
          rel="noopener noreferrer"
        >
          好故事看几遍不嫌多 | 天行长臂猿命名人范朋飞首次公开讲述发现历程 （下）
        </a>

        <a
          href="https://mp.weixin.qq.com/s/jFYNUmx8eC3eFPM9QyH3dQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          不足150只，天行长臂猿成为全球25种最濒危的灵长类
        </a>

        <a
          href="https://mp.weixin.qq.com/s/4QQ_40Ocgt0rBrjidiVASw"
          target="_blank"
          rel="noopener noreferrer"
        >
          中国长臂猿消亡史
        </a>
      </div>
    </div>
  );
}

export default App;
