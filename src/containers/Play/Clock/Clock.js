import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { clock } from '../../../shared/imgHandler';

const computeAngle = (action, time, start) => {
  if (action === 'hour') {
    // 如 start 為 false 則 minute + 1
    // 否則維持目前取得的值
    const plus = start ? 0 : 1;
    const DATE = new Date();
    return (time + parseInt((DATE.getMinutes() + plus) / 10) * (1 / 6)) * 30;
  }
  return time * 6;
};

const formatTime = (time) => {
  let result = time;
  if (time < 10) result = `0${time}`;
  return result;
};

const Clock = ({ className }) => {
  const DATE = new Date();
  let s = DATE.getSeconds();
  let m = DATE.getMinutes();
  let h = DATE.getHours();

  const [hourAngle, setHourAngle] = useState(computeAngle('hour', h, true));
  const [minuteAngle, setMinuteAngle] = useState(computeAngle('minute', m));
  const [secondAngle, setSecondAngle] = useState(computeAngle('second', s));

  useEffect(() => {
    setInterval(() => {
      s++;
      setSecondAngle(computeAngle('second', s));

      if (s % 60 !== 0) return;
      m++;
      setMinuteAngle(computeAngle('minute', m));

      if (m % 10 !== 0) return;
      setHourAngle(computeAngle('hour', h, false));
    }, 1000);
  }, []);

  return (
    <div className={`clock ${className}`}>
      <div className="wrap">
        <div className="clock_group">
          <img className="bg" src={clock.bg} />
          <img
            style={{
              transform: `translate(-100%, calc(-50% - 0.4rem)) rotate(${
                90 + hourAngle
              }deg)`,
            }}
            className="hour center"
            src={clock.hour}
          />
          <img
            style={{
              transform: `translate(-50%, -0.4rem) rotate(${
                180 + secondAngle
              }deg)`,
            }}
            className="second center"
            src={clock.second}
          />
          <img
            style={{
              transform: `translate(calc(-50% - 0rem), calc(-100% - 0.4rem)) rotate(${minuteAngle}deg)`,
            }}
            className="minute center"
            src={clock.minute}
          />
        </div>
        <div className="time_group">
          <span className="hour">{formatTime(h)}</span>
          <span className="dot">：</span>
          <span className="minute">{formatTime(m)}</span>
          <span className="dot">：</span>
          <span className="second">{formatTime(s)}</span>
        </div>
      </div>
    </div>
  );
};

const ClockStyle = styled(Clock)`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clock_group {
    position: relative;
    animation: slide-bottom 1.5s;
    @keyframes slide-bottom {
      0% {
        transform: translate(0, 20%);
        opacity: 0;
      }
      70% {
        transform: translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
    .bg {
      width: 50rem;
    }
    .hour {
      width: 7.2rem;
      transform-origin: right center;
    }
    .minute {
      width: 0.8rem;
      transform-origin: center bottom;
    }
    .second {
      width: 1.325rem;
      transform-origin: center top;
    }
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: 0.3s;
    }
  }
  .time_group {
    font-size: 5rem;
    font-weight: 900;
    color: #fff;
    margin-left: -3rem;
    .dot {
      opacity: 0.8;
    }
  }
`;

export default ClockStyle;
