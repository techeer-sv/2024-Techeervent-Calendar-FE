import React, { useEffect, useRef, useState } from 'react';
import Santa from '../../../../public/assets/Santa.svg';
import Tree from '../../../../public/assets/Obstacle.svg';
import Ground from '../../../assets/images/ground.png';
import Cloud from '../../../assets/images/cloud.png';

const Dino: React.FC = () => {
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
    if (!canvas) throw new Error('Canvas element not found');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get canvas rendering context');

    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;

    // 이미지 로드
    const img2 = new Image();
    img2.src = Santa;

    const img1 = new Image();
    img1.src = Tree;

    const ground = new Image();
    ground.src = Ground;

    const cloud = new Image();
    cloud.src = Cloud;

    // 산타 객체 타입 정의
    interface Drawable {
      x: number;
      y: number;
      width: number;
      height: number;
      draw(): void;
    }

    // 산타 객체
    const santa: Drawable = {
      x: 10,
      y: 200,
      width: 50,
      height: 50,
      draw() {
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
      },
    };

    // 장애물 클래스
    class Obstacle implements Drawable {
      x: number;
      y: number;
      width: number;
      height: number;

      constructor() {
        this.x = 600;
        this.y = 200;
        this.width = 50;
        this.height = 50;
      }

      draw() {
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
      }
    }

    // 게임 상태 관리 변수
    let timer = 0;
    let jumptimer = 0;
    const trees: Obstacle[] = [];
    let animation: number;
    let isJumping = false;

    // 충돌 체크 함수
    const crush = (santa: Drawable, obstacle: Drawable): void => {
      const xdif = obstacle.x - (santa.x + santa.width);
      const ydif = obstacle.y - (santa.y + santa.height);

      if (xdif < 0 && ydif < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
        alert(`Game Over! Your final score: ${scoreRef.current}`);
      }
    };

    // 게임 루프
    const frame = (): void => {
      if (!gameStarted) return;

      animation = requestAnimationFrame(frame);
      timer++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 배경 그리기 (구름과 땅)
      ctx.drawImage(cloud, 0, 0, canvas.width, 80); // 구름 배경
      ctx.drawImage(ground, 0, canvas.height - 480, canvas.width, 80); // 땅 배경

      // 일정 주기로 트리 생성 (1~2개 랜덤 생성)
      if (timer % 80 === 0) {
        const numObstacles = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numObstacles; i++) {
          const tree = new Obstacle();
          if (numObstacles === 2) {
            tree.x += i * 30; // 두 개의 장애물이 겹치지 않도록 X 위치를 변경
          }
          trees.push(tree);
        }
      }

      // 트리 이동 및 그리기
      trees.forEach((tree, index, array) => {
        if (tree.x < 0) {
          array.splice(index, 1);
        }
        tree.x -= 4;
        crush(santa, tree);
        tree.draw();
      });

      // 점프 로직
      if (isJumping) {
        santa.y -= 4;
        jumptimer++;
      }

      if (!isJumping && santa.y < 200) {
        santa.y += 4;
      }

      if (jumptimer > 30) {
        isJumping = false;
        jumptimer = 0;
        scoreRef.current += 1;
        setScore(scoreRef.current);
      }

      santa.draw();
    };

    // 키 입력 처리
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) {
        setGameStarted(true); // 게임 시작
      }

      if (e.code === 'Space' && !isJumping) {
        isJumping = true;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // 게임 시작
    frame();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  return (
    <div>
      <h1>Score: {score}</h1>
      {!gameStarted && (
        <div className="flex flex-col justify-center items-center text-black text-2xl">
          <img src={Santa} alt="산타" className="w-32 h-32 my-10" />
          Press any key to start
        </div>
      )}
      <canvas id="canvas" />
    </div>
  );
};

export default Dino;
