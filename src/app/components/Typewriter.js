'use client';

import { useEffect, useState, useRef } from 'react';

export default function Typewriter({
  texts = ['字段', '字段2', '字段3'],
  typingSpeed = 250, //每个字出现的速度(毫秒)
  deletingSpeed = 200, //删除每个字的速度
  pauseTime = 3000, //完整显示后停顿的时间
  playSound = false,
}) {
  //当前正在显示的文字内容
  const [text, setText] = useState('');
  //是否正在删除文字
  const [isDeleting, setIsDeleting] = useState(false);
  //当前是第几个字符串
  const [textIndex, setTextIndex] = useState(0);
  //当前显示字符串的第几个字符
  const [charIndex, setCharIndex] = useState(0);
  //控制光标的显示
  const [showCursor, setShowCursor] = useState(true);
  //控制停止时闪烁
  const [isPaused, setIsPaused] = useState(false);

  const typingSoundRef = useRef(null);
  //用ref存储不变的参数，避免触发useEffect的依赖更新
  const textsRef = useRef(texts);
  const typingSpeedRef = useRef(typingSpeed);
  const deletingSpeedRef = useRef(deletingSpeed);
  const pauseTimeRef = useRef(pauseTime);
  const isPausedRef = useRef(false);

  //同步isPaused状态到ref
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    // 当前正在处理的文本内容
    const currentText = textsRef.current[textIndex % textsRef.current.length];

    let timeoutId;

    if (!isDeleting) {
      //正在打字阶段
      if (charIndex <= currentText.length) {
        //截取当前字符数，设置为显示的文本
        setText(currentText.slice(0, charIndex + 1));
        //播放打字音效（如果开启）
        if (playSound && typingSoundRef.current) typingSoundRef.current.play();
        //下一次打下一个字
        timeoutId = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, typingSpeedRef.current);
      } else {
        setIsPaused(true);
        //打完一个字符串之后等待一段时间后开始删除
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseTimeRef.current);
      }
    } else {
      //正在删除阶段
      if (charIndex > 0) {
        //截取当前字符数（减少一个字符），设置为显示文本
        setText(currentText.slice(0, charIndex - 1));
        //下一次删除一个字
        timeoutId = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, deletingSpeedRef.current);
      } else {
        setIsPaused(true);
        timeoutId = setTimeout(() => {
          // 删除完后切换到下一个字符串
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % textsRef.current.length);
        }, pauseTimeRef.current);
      }
    }
    //清除timeout，避免内存泄露
    return () => {
      clearTimeout(timeoutId);
    };
  }, [charIndex, isDeleting, textIndex, playSound, texts]);

  //光标闪烁
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPausedRef.current) {
        setShowCursor(prev => !prev);
      } else {
        setShowCursor(true);
      }
    }, 500);
    return () => clearInterval(intervalId);
  });

  return (
    <span className="relative inline-flex items-center font-mono">
      {text}
      <span
        className={`inline-block ml-1 w-[0.6em] h-[1em] bg-white transition-opacity duration-200 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ borderRadius: '0' }}
      ></span>
    </span>
  );
}
