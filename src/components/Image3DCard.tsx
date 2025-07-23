import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Image3DCardProps {
  imageUrl: string;
  title: string;
  description: string;
  bgColor: string;
  shadow: string;
  width: string;
  height: string;
}

const Image3DCard = ({ imageUrl, title, description, bgColor, shadow, width, height }: Image3DCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Tilt transformation
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  // Reset position when not hovering
  useEffect(() => {
    if (!isHovered) {
      const reset = () => {
        x.set(0.5);
        y.set(0.5);
      };
      reset();
    }
  }, [isHovered, x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - bounds.left) / bounds.width;
    const yPos = (e.clientY - bounds.top) / bounds.height;
    
    x.set(xPos);
    y.set(yPos);
  };

  return (
    <div className={`relative ${width} ${height}`} style={{ perspective: '1000px' }}>
      <motion.div
        className={`w-full h-full rounded-xl overflow-hidden cursor-pointer relative bg-${bgColor} `}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Image with fallback */}
        <motion.img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover`}
          style={{
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
            transform: 'translateZ(0)',
            transition: 'filter 0.3s ease'
          }}
        />

        {/* Content overlay */}
        <motion.div
          className="absolute bottom-0 left-0 p-6 text-white"
          initial={{ y: 30, opacity: 0.9 }}
          animate={{
            y: isHovered ? 0 : 30,
            opacity: isHovered ? 1 : 0.9
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </motion.div>

        {/* Hover glow effect */}
       
      </motion.div>

      {/* Static shadow */}
      <div className={`absolute inset-0 rounded-xl shadow-${shadow} pointer-events-none`} />
    </div>
  );
};

export default Image3DCard;