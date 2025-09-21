import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onExpire: () => void;
}

export const CountdownTimer = ({ onExpire }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsExpired(true);
          onExpire();
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onExpire]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isExpired) return null;

  return (
    <div className="bg-destructive text-destructive-foreground px-6 py-3 rounded-xl text-center animate-pulse-slow shadow-glow">
      <div className="text-sm font-medium mb-1">⚠️ LIMITED TIME OFFER EXPIRES IN:</div>
      <div className="text-3xl font-bold font-mono tracking-wider animate-glow">
        {formatTime(timeLeft)}
      </div>
      <div className="text-xs mt-1 opacity-90">Hurry! Price will increase to $199</div>
    </div>
  );
};