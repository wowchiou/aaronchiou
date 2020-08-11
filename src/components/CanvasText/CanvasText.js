import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const CanvasText = ({ className }) => {
  console.log('CanvasText');

  const canvas_box_ref = useRef(null);
  const canvas_stage_ref = useRef(null);
  const canvas_text_ref = useRef(null);

  let canvas_stage, canvas_text, circles, textPixels;

  // 控制字位置的基數
  const d = 4;

  window.createjs.Touch.enable(canvas_stage);

  const setCanvasStage = () => {
    canvas_text = new window.createjs.Stage(canvas_text_ref.current);
    canvas_stage = new window.createjs.Stage(canvas_stage_ref.current);

    canvas_stage.enableMouseOver(10);
    canvas_stage.mouseMoveOutside = true;

    canvas_text.canvas.width = canvas_stage.canvas.width = window.innerWidth;
    canvas_text.canvas.height = canvas_stage.canvas.height = window.innerHeight;
  };

  const createText = useCallback((t, cw) => {
    // 文字設定
    const text = new window.createjs.Text(
      t,
      '600 40vw "微軟正黑體"',
      'rgba(255,255,255, .01)'
    );
    text.x = window.innerWidth / 1.5;
    text.y = window.innerHeight / 1.2;
    text.textBaseline = 'alphabetic';
    text.textAlign = 'center';

    canvas_text.addChild(text);
    canvas_text.update();

    getTextPixels(canvas_text.canvas, cw);
  }, []);

  const getTextPixels = (cv, cw) => {
    textPixels = [];
    const cv_width = cv.width;
    const cv_height = cv.height;
    const ctx = canvas_text_ref.current.getContext('2d');
    const pix = ctx.getImageData(0, 0, cv_width, cv_height).data;

    for (let i = pix.length; i >= 0; i -= d) {
      if (pix[i] !== 0) {
        const x = (i / d) % cv_width;
        const y = Math.floor(Math.floor(i / cv_width) / d);

        // 控制圓點數量
        if (x && x % (d * cw) === 0 && y && y % (d * cw) === 0) {
          textPixels.push({ x: x, y: y });
        }
      }
    }

    createCircles(textPixels);
  };

  const createCircles = (pixels) => {
    circles = [];
    pixels.forEach(function (pix, idx) {
      const circle = new window.createjs.Shape();
      circle.x = -200 + Math.random() * 400 + pix.x;
      circle.y = -200 + Math.random() * 400 + pix.y;
      circle.scale = 1;
      circle.alpha = 1;
      circle.graphics.beginFill(`rgb(255,255,255)`).drawCircle(0, 0, 5);

      circles.push(circle);
      canvas_stage.addChild(circle);

      setCircleAnimate(circle, pix.x, pix.y);
    });
  };

  const setCircleAnimate = (c, x, y) => {
    window.createjs.Tween.removeTweens(c);
    window.createjs.Tween.get(c).to(
      {
        x: x,
        y: y,
      },
      1500,
      window.createjs.Ease.cubicInOut
    );

    window.createjs.Tween.get(c, { loop: true })
      .wait(1500)
      .to(
        {
          alpha: 0,
        },
        Math.random().toFixed(1) * 10000,
        window.createjs.Ease.linear
      );

    window.createjs.Ticker.framerate = 30;
    window.createjs.Ticker.addEventListener('tick', handleTick);
  };

  const handleTick = (even) => {
    canvas_stage.update();
  };

  const clearStage = (stage) => {
    stage.clear();
    stage.removeAllChildren();
  };

  const resizeText = () => {
    setCanvasStage();
    if (window.innerWidth < 768) {
      createText('A.C.', 3);
    } else {
      createText('A.C.', 7);
    }
  };

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', () => {
      clearStage(canvas_text);
      clearStage(canvas_stage);
      resizeText();
    });
  }, []);

  return (
    <div className={`canvasText ${className}`} ref={canvas_box_ref}>
      <canvas
        ref={canvas_text_ref}
        className="canvasText_text"
        width="200"
        height="auto"
      ></canvas>
      <canvas
        ref={canvas_stage_ref}
        className="canvasText_stage"
        width="200"
        height="200"
      ></canvas>
    </div>
  );
};

const CanvasTextStyle = styled(CanvasText)`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  .canvasText_stage,
  .canvasText_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default CanvasTextStyle;
