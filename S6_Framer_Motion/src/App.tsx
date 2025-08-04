import { motion } from 'motion/react';
import PulsingButton from './components/Examples/PulsingButton';
import BouncingLoader from './components/Examples/BouncingLoader';
import { useState } from 'react';
import { varians } from './varians';
import FlippingCard from './components/Examples/FlippingCard';
import AnimatedCard from './components/Examples/AnimatedCard';
import ImageGallery from './components/Examples/ImageGallery';
import AnimatedShape from './components/Examples/AnimatedShape';
import StaggerAnimation from './components/Examples/StaggerAnimation';
import AnimatedGallery from './components/Examples/AnimatedGallery';
import RangeSlider from './components/Examples/RangeSlider';
// import DraggableBox from './components/Examples/DraggableBox';
import AnimatedCard2 from './components/Examples/AnimatedCard2';
import ScrollAnimation from './components/Examples/ScrollAnimation';
import Box from './components/Transformation/Box';
import VerticalMovement from './components/Transformation/VerticalMovement';
import SpinningIcon from './components/Transformation/SpinningIcon';
import SkewRectangle from './components/Transformation/SkewRectangle';
import ComplexAnimation from './components/Transformation/ComplexAnimation';
import SequentialBoxes from './components/Transformation/SequentialBoxes';
import FadeComponent from './components/Transitions/FadeComponent';
// import Sidebar from './components/Transitions/Sidebar';
import Modal from './components/Transitions/Modal';
import ResponsiveButton from './components/Transitions/ResponsiveButton';
import Accordion from './components/Transitions/Accordion';
import ToastNotification from './components/Transitions/ToastNotification';
import BouncingBall from './components/Keyframes/BouncingBall';
import PulsatingButton from './components/Keyframes/PulsatingButton';
import ColorChangeSquare from './components/Keyframes/ColorChangeSquare';
import SlidingText from './components/Keyframes/SlidingText';
import ZigzagAnimation from './components/Keyframes/ZigzagAnimation';
import WaveEffect from './components/Keyframes/WaveEffect';
import AnimatedBackground from './components/Keyframes/AnimatedBackground';
import FadeInComponent from './components/Variants/FadeInComponent';
import SlidingMenu from './components/Variants/SlidingMenu';
import Tooltip from './components/Variants/Tooltip';
import ToggleSwitch from './components/Variants/ToggleSwitch';
import SwipeableCard from './components/Gestures/SwipeableCard';
// import DraggableBox from './components/Gestures/DraggableBox';
import RotateOnDrag from './components/Gestures/RotateOnDrag';
import TapToChangeColor from './components/Gestures/TapToChangeColor';
import LongPressToChangeSize from './components/Gestures/LongPressToChangeSize';
import GestureBasedImageGallery from './components/Gestures/GestureBasedImageGallery';
import StaggeredList from './components/Stagger/StaggeredList';
import StaggeredImageGallery from './components/Stagger/StaggeredImageGallery';
import StaggeredButtonPress from './components/Stagger/StaggeredButtonPress';
import StaggeredGridLayout from './components/Stagger/StaggeredGridLayout';
import StaggeredTextReveal from './components/Stagger/StaggeredTextReveal';
// import DraggableBox from './components/useMotionValue/DraggableBox';
// import HoverLinkedScale from './components/useMotionValue/HoverLinkedScale';
import SpringAnimatedPosition from './components/useMotionValue/SpringAnimatedPosition';
import DynamicRotation from './components/useMotionValue/DynamicRotation';
import DraggableBox from './components/useSpring/DraggableBox';
import HoverLinkedScale from './components/useSpring/HoverLinkedScale';
import StaggeredListV2 from './components/whileInView/StaggeredListV2';
import CardFlip from './components/whileInView/CardFlip';
import TimelineAnimation from './components/whileInView/TimelineAnimation';
import InteractiveCards from './components/whileInView/InteractiveCards';
import ScrollIndicator from './components/Project/ScrollIndicator';
import Loader from './components/Project/Loader';
// import DraggableCard from './components/Project/DraggableCard';
import Carousel from './components/Project/Carousel';
import Sidebar from './components/Project/Sidebar';
import ScrollCarousel from './components/Project/ScrollCarousel';
import StickyNav from './components/Project/StickyNav';
import ProgressSteps from './components/Project/ProgressSteps';

/**
 * Keyframes: allow us to create more complex animations by specifying multiple points
 * in an animation sequence. Instead of just animating from one state to another, we
 * can define several intermediate states (frames) to control animation more precisely
 */

/**
 * Variants: are a way to define different states or styles for our animations in a
 * organized way. Think of them as predefined animation setups that we can switch
 * between easily.
 */

/**
 * Gestures: allow us to add interactive animations base on user actions like
 * dragging, hovering, or tapping. It makes out components respond to how users
 * interact with them.
 */

/**
 * useMotionValue Hook: enables fine control over animations, allowing us to trigger
 * animations programmatically based on component state or events. It allows for the
 * integration of more complex animation logic that goes beyong what's achievable with
 * just props on a motion component.
 */

/**
 * useSpring Hook: allows us to create smooth, spring-based animations. It provides
 * a way to manage animated values that follow a spring physics model, resulting in
 * more natural and fluid motion compared to linear animations.
 */

/**
 * useTransform Hook: is used to map one range of values to another. It's great for
 * creating smooth animations and effects based on input values, like scroll position
 * or mouse movements.
 */

/**
 * Scroll Triggered Animations:
 * These animations are triggered when the user scrolls to specific point in the
 * viewport. ONce the scroll reaches that poin, the animation plays.
 *
 * => Great for revealing elements, changing styles, or starting animations at specific
 * sections of a page
 */

/**
 * Scroll Driven Animations:
 * These animations continuously change as the user scrolls, allowing for a smoother,
 * more interactive experience. The animation properties can be mapped directly to
 * the scroll position.
 *
 * => Ideal for parallax effects, transforming elements, or adjusting opacity based on
 * scroll depth.
 */

/**
 * whileInView Prop: is used to trigger animations when an element comes into the
 * viewport. It allows us to define how an element should animate while it is visible
 * on the screen. It enables us to create engaging animations that activate when the
 * user scrolls to a psecific part of your webpage.
 */

/**
 * Viewport Prop: is used to customize how animations are triggered based on the
 * visibility of an element in the viewport. It allows us to specify settings that
 * affect when and how animations occur as elements scroll in to or out of view.
 */

/**
 * useScroll Hook: helps track the scroll position of the page. It makes it easy to
 * create animations or effects that respond to how much the user has scrolled.
 */

const App = () => {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 100 }} /> */}
      {/* <motion.div className="box" animate={{ y: 100 }} /> */}

      {/* <motion.div className="box" animate={{ rotateX: 60 }} /> */}
      {/* <motion.div className="box" animate={{ rotateY: 60 }} /> */}
      {/* <motion.div className="box" animate={{ rotate: 20 }} /> */}

      {/* <motion.div className="box" animate={{ scaleX: 2 }} /> */}
      {/* <motion.div className="box" animate={{ scaleY: 2 }} /> */}
      {/* <motion.div className="box" animate={{ scale: 2 }} /> */}

      {/* <motion.div className="box" animate={{ skewX: 20 }} /> */}
      {/* <motion.div className="box" animate={{ skewY: 20 }} /> */}
      {/* <motion.div className='box' animate={{ skewX: 20, skewY: 20 }} /> */}

      {/* <motion.div
        className='box'
        initial={{ x: 0 }}
        animate={{ x: 200 }}
        // transition={{ delay: 2 }}
        // transition={{ duration: 3 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      /> */}

      {/* <motion.div
        className='box'
        animate={{
          // scale: [1, 2, 2, 3, 4, 3]
          // rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{ duration: 5 }}
      /> */}

      {/* <PulsingButton /> */}
      {/* <BouncingLoader /> */}

      {/* <motion.div
        className='box'
        variants={varians}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        exit='exit'
        transition={{ duration: 1 }}
        onClick={() => setIsVisible(!isVisible)}
      /> */}

      {/* <FlippingCard /> */}

      {/* whileHover */}
      {/* <motion.div
        className='box'
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      /> */}

      {/* whileTap */}
      {/* <motion.div
        className='box'
        whileTap={{ scale: 0.8, backgroundColor: 'crimson' }}
        transition={{ type: 'spring', stiffness: 300 }}
      /> */}

      {/* whileDrag */}
      {/* <motion.div
        className='box'
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      /> */}

      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimatedShape /> */}
      {/* <StaggerAnimation /> */}
      {/* <AnimatedGallery /> */}
      {/* <RangeSlider /> */}
      {/* <DraggableBox /> */}

      {/* <div className='h-screen'>
        <AnimatedCard2 />
      </div>  */}

      {/* <ScrollAnimation /> */}

      {/* Practice 1 */}
      {/* <Box /> */}
      {/* <VerticalMovement /> */}
      {/* <SpinningIcon /> */}
      {/* <SkewRectangle /> */}
      {/* <ComplexAnimation /> */}
      {/* <SequentialBoxes /> */}

      {/* Practice 2 */}
      {/* <FadeComponent /> */}
      {/* <Sidebar /> */}
      {/* <Modal /> */}
      {/* <ResponsiveButton /> */}
      {/* <Accordion /> */}
      {/* <ToastNotification /> */}

      {/* Practice 3 */}
      {/* <BouncingBall /> */}
      {/* <PulsatingButton /> */}
      {/* <ColorChangeSquare /> */}
      {/* <SlidingText /> */}
      {/* <ZigzagAnimation /> */}
      {/* <WaveEffect /> */}
      {/* <AnimatedBackground /> */}

      {/* Practice 4 */}
      {/* <FadeInComponent /> */}
      {/* <SlidingMenu /> */}
      {/* <Tooltip /> */}
      {/* <ToggleSwitch /> */}

      {/* Practice 5 */}
      {/* <SwipeableCard /> */}
      {/* <DraggableBox /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      {/* <LongPressToChangeSize /> */}
      {/* <GestureBasedImageGallery /> */}

      {/* Practice 6 */}
      {/* <StaggeredList /> */}
      {/* <StaggeredImageGallery /> */}
      {/* <StaggeredButtonPress /> */}
      {/* <StaggeredGridLayout /> */}
      {/* <StaggeredTextReveal /> */}

      {/* Practice 7 */}
      {/* <DraggableBox /> */}
      {/* <HoverLinkedScale /> */}
      {/* <SpringAnimatedPosition /> */}
      {/* <DynamicRotation /> */}

      {/* Practice 8 */}
      {/* <DraggableBox /> */}
      {/* <HoverLinkedScale /> */}

      {/* Practice 9 */}
      {/* <StaggeredListV2 /> */}
      {/* <CardFlip /> */}
      {/* <TimelineAnimation /> */}
      {/* <InteractiveCards /> */}

      {/* Project */}
      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      {/* <DraggableCard
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        }}
      >
        Card 1
      </DraggableCard>
      <DraggableCard
        style={{
          background: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        }}
      >
        Card 2
      </DraggableCard>
      <DraggableCard
        style={{
          background: 'linear-gradient(135deg, #ff9a9c 0%,#fecfef 100%)',
        }}
      >
        Card 3
      </DraggableCard> */}

      {/* <Carousel /> */}
      {/* <Sidebar /> */}
      {/* <ScrollCarousel /> */}
      {/* <StickyNav /> */}
      <ProgressSteps />
    </div>
  );
};
export default App;
