import { useSpring, animated} from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import styles from './Header.module.scss';
import { useState } from 'react';

const Icon = ({isActive}: {isActive: boolean}) => {
  const { x } = useSpring({ config: { duration: 1000 }, x: isActive ? 1 : 0 });
  return (
    <>
      <svg width="217" height="186" viewBox="0 0 217 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 108.132C1 151.881 28.0747 185 72.4976 185C101.109 185 133.151 167.124 152.337 142.71C152.337 142.71 155.921 143.239 158.295 143.339C168.507 143.77 175.477 136.676 177.956 126.909C182.723 108.132 169.615 98.157 169.615 98.157C169.615 54.4079 122.283 43 77.8599 43C33.437 43 1 64.3831 1 108.132Z" fill="white" stroke="black"/>
        <path d="M60 133H43L51.5 146L60 133Z" fill="#586362"/>
        <path d="M120 111H79.2978C79.2978 111 88.7557 130.832 99.3539 130.999C110.123 131.169 120 111 120 111Z" fill="black"/>
        <path d="M15 111H43.9045C43.9045 111 36.256 127.412 27.9775 126.483C20.5165 125.646 15 111 15 111Z" fill="black"/>
        <path d="M120 111H79.2978C79.2978 111 88.7557 130.832 99.3539 130.999C110.123 131.169 120 111 120 111Z" stroke="black"/>
        <path d="M15 111H43.9045C43.9045 111 36.256 127.412 27.9775 126.483C20.5165 125.646 15 111 15 111Z" stroke="black"/>
        <path d="M120 111H79.2978C79.2978 111 88.7557 138.765 99.3539 138.999C110.123 139.236 120 111 120 111Z" fill="url(#paint0_radial_0_1)"/>
        <path d="M15 111H43.9045C43.9045 111 36.256 133.976 27.9775 132.676C20.5165 131.505 15 111 15 111Z" fill="url(#paint1_radial_0_1)"/>
        <animated.path 
          d={x.to({
            range: [0, 1],
            output: [
              "M60 162C60 162.552 56.1944 163 51.5 163C46.8056 163 43 162.552 43 162C43 161.448 45.3056 161.5 50 161.5C54.6944 161.5 60 161.448 60 162Z",
              "M74 154.049C74 159.841 58.6897 161 55.5 161C53.5862 161 38.2759 161 37 154.628C37 153.988 40.191 159.262 55.5 159.262C69.5345 159.262 74 153.409 74 154.049Z"
            ]
          })}
          fill="black"
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M5.52061 74.5429C6.25807 75.42 23.5749 80.0938 36.3543 83.9486C51.3028 88.4578 94.7067 93.7177 129.83 92.2667C146.841 91.564 170.858 89.501 170.858 89.501L192.877 97.1066C217.263 102.638 228.564 101.255 195.256 83.9486L171.98 70.1414C171.681 68.1319 171.313 66.1962 170.858 64.4905C165.219 43.3389 160.048 34.4288 145.153 23.2394C131.85 13.2461 117.19 6.80729 102.112 3.00292C82.86 -1.85463 65.7049 2.65941 47.1147 10.7862C39.9412 13.9222 26.5204 22.8819 16.0295 39.5842C4.21892 58.3874 4.3316 73.1286 5.52061 74.5429ZM82.2472 83.9486L38.233 76.3431C38.233 76.3431 33.3161 70.3401 34.0602 66.5286C34.955 61.9457 43.5861 58.3874 43.5861 58.3874L82.2472 64.4905C82.2472 64.4905 92.9231 71.7143 91.1394 75.4857C89.3557 79.2571 82.2472 83.9486 82.2472 83.9486Z" fill="#353535"/>
        <path d="M170.858 89.501C170.858 89.501 146.841 91.564 129.83 92.2667C94.7067 93.7177 51.3028 88.4578 36.3543 83.9486C23.5749 80.0938 6.25807 75.42 5.52061 74.5429C4.3316 73.1286 4.21892 58.3874 16.0295 39.5842C26.5204 22.8819 39.9412 13.9222 47.1147 10.7862C65.7049 2.65941 82.86 -1.85463 102.112 3.00292C117.19 6.80729 131.85 13.2461 145.153 23.2394C160.048 34.4288 165.219 43.3389 170.858 64.4905C171.313 66.1962 171.681 68.1319 171.98 70.1414M170.858 89.501L192.877 97.1066C217.263 102.638 228.564 101.255 195.256 83.9486L171.98 70.1414M170.858 89.501C170.858 89.501 173.201 78.3707 171.98 70.1414M38.233 76.3431L82.2472 83.9486C82.2472 83.9486 89.3557 79.2571 91.1394 75.4857C92.9231 71.7143 82.2472 64.4905 82.2472 64.4905L43.5861 58.3874C43.5861 58.3874 34.955 61.9457 34.0602 66.5286C33.3161 70.3401 38.233 76.3431 38.233 76.3431Z" stroke="black"/>
        <defs>
        <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.9101 42.1667) rotate(90) scale(105.864 225.276)">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.9101 42.1667) rotate(90) scale(105.864 225.276)">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
        </radialGradient>
        </defs>
      </svg>
    </>
  );
}

const WednesdayIcon = () => {
  return (
    <>
      <svg width="205" height="222" viewBox="0 0 205 222" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="41" y="46.1967" width="72" height="50" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0627 84.5345C15.0627 84.5345 29.4734 82.2346 40.6593 88.3138C47.0631 91.794 62.2869 91.9225 77.7752 95.6908C120.674 106.128 123.695 85.058 136.429 87.1848C145.524 88.7039 149.903 95.6907 151.622 98.3704C160.658 101.521 164.726 101.66 164.726 101.66L183.646 111.975C204.976 120.433 215.371 120.305 187.502 98.75L168.248 81.9295C168.238 79.8341 168.156 77.8066 167.966 76.005C165.608 53.6647 162.088 43.9347 150.072 30.7564C139.34 18.9869 126.921 10.7084 113.783 5.0845C97.0082 -2.09625 80.9148 0.5754 63.056 6.789C56.1647 9.18669 42.8712 16.8449 31.2234 32.7796C18.1104 50.7187 15.0627 84.5345 15.0627 84.5345ZM90.9234 82.436L48.4552 78.7103C48.4552 78.7103 44.7879 71.9914 45.9544 68.1666C47.357 63.5678 55.6207 60.9034 55.6207 60.9034L93.4442 62.4767C93.4442 62.4767 100.059 66.5529 100.059 74.7703C100.059 79.4274 90.9234 82.436 90.9234 82.436Z" fill="#353535"/>
        <path d="M164.726 101.66L183.646 111.975C204.976 120.433 215.371 120.305 187.502 98.75L168.248 81.9295M164.726 101.66C164.726 101.66 168.286 90.5103 168.248 81.9295M164.726 101.66C164.726 101.66 160.658 101.521 151.622 98.3704C149.903 95.6907 145.524 88.7039 136.429 87.1848C123.695 85.058 120.674 106.128 77.7752 95.6908C62.2869 91.9225 47.0631 91.794 40.6593 88.3138C29.4734 82.2346 15.0627 84.5345 15.0627 84.5345C15.0627 84.5345 18.1104 50.7187 31.2234 32.7796C42.8712 16.8449 56.1647 9.18669 63.056 6.789C80.9148 0.5754 97.0082 -2.09625 113.783 5.0845C126.921 10.7084 139.34 18.9869 150.072 30.7564C162.088 43.9347 165.608 53.6647 167.966 76.005C168.156 77.8066 168.238 79.8341 168.248 81.9295M48.4552 78.7103L90.9234 82.436C90.9234 82.436 100.059 79.4274 100.059 74.7703C100.059 66.5529 93.4442 62.4767 93.4442 62.4767L55.6207 60.9034C55.6207 60.9034 47.357 63.5678 45.9544 68.1666C44.7879 71.9914 48.4552 78.7103 48.4552 78.7103Z" stroke="black"/>
        <path d="M1.0201 102.012C1.0201 108.851 4.74592 114.783 10.1961 117.719C12.5218 118.972 15.1616 119.68 17.9598 119.68C27.3154 119.68 34.8996 111.77 34.8996 102.012C34.8996 92.2535 27.3154 84.343 17.9598 84.343C16.2412 84.343 14.5824 84.61 13.0193 85.1063C6.07379 87.3117 1.0201 94.0461 1.0201 102.012Z" fill="white"/>
        <path d="M121.01 102.012C121.01 111.77 128.594 119.68 137.95 119.68C147.305 119.68 154.89 111.77 154.89 102.012C154.89 92.2535 147.305 84.343 137.95 84.343C128.594 84.343 121.01 92.2535 121.01 102.012Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.9598 119.68C27.3154 119.68 34.8996 111.77 34.8996 102.012C34.8996 92.2535 27.3154 84.343 17.9598 84.343C16.2412 84.343 14.5824 84.61 13.0193 85.1063C13.0193 85.1063 16.6712 77.1967 24.9677 77.1967C32.6284 77.1967 41.1806 86.5575 52.5454 89.997C76.0248 97.1028 92.1726 98.0074 115.364 89.997C124.686 86.7769 128.164 77.4643 137.95 78.6891C145.839 79.6765 150.204 83.5652 154.89 89.997C159.308 96.0627 159.468 100.941 160.536 108.372C161.518 115.202 159.235 119.265 160.536 126.041C162.399 135.738 170.61 138.858 171.829 148.657C173.127 159.086 166.637 164.361 165.477 174.806C164.472 183.858 161.242 192.924 161.242 192.924C161.242 192.924 116.309 221.551 84.3071 221.193C57.026 220.889 17.9598 199.284 17.9598 199.284L10.1961 174.806C10.1961 174.806 0.501368 159.468 1.0201 148.657C1.47697 139.135 9.27207 135.529 10.1961 126.041C10.511 122.806 10.1961 117.719 10.1961 117.719C12.5218 118.972 15.1616 119.68 17.9598 119.68ZM137.95 119.68C128.594 119.68 121.01 111.77 121.01 102.012C121.01 92.2535 128.594 84.343 137.95 84.343C147.305 84.343 154.89 92.2535 154.89 102.012C154.89 111.77 147.305 119.68 137.95 119.68Z" fill="white"/>
        <path d="M13.0193 85.1063C14.5824 84.61 16.2412 84.343 17.9598 84.343C27.3154 84.343 34.8996 92.2535 34.8996 102.012C34.8996 111.77 27.3154 119.68 17.9598 119.68C15.1616 119.68 12.5218 118.972 10.1961 117.719M13.0193 85.1063C6.07379 87.3117 1.0201 94.0461 1.0201 102.012C1.0201 108.851 4.74592 114.783 10.1961 117.719M13.0193 85.1063C13.0193 85.1063 16.6712 77.1967 24.9677 77.1967C32.6284 77.1967 41.1806 86.5575 52.5454 89.997C76.0248 97.1028 92.1726 98.0074 115.364 89.997C124.686 86.7769 128.164 77.4643 137.95 78.6891C145.839 79.6765 150.204 83.5652 154.89 89.997C159.308 96.0627 159.468 100.941 160.536 108.372C161.518 115.202 159.235 119.265 160.536 126.041C162.399 135.738 170.61 138.858 171.829 148.657C173.127 159.086 166.637 164.361 165.477 174.806C164.472 183.858 161.242 192.924 161.242 192.924C161.242 192.924 116.309 221.551 84.3071 221.193C57.026 220.889 17.9598 199.284 17.9598 199.284L10.1961 174.806C10.1961 174.806 0.501368 159.468 1.0201 148.657C1.47697 139.135 9.27207 135.529 10.1961 126.041C10.511 122.806 10.1961 117.719 10.1961 117.719M121.01 102.012C121.01 111.77 128.594 119.68 137.95 119.68C147.305 119.68 154.89 111.77 154.89 102.012C154.89 92.2535 147.305 84.343 137.95 84.343C128.594 84.343 121.01 92.2535 121.01 102.012Z" stroke="black"/>
        <path d="M154.133 97.0843L121.664 96.1534C121.664 96.1534 121.359 133.69 137.093 131.065C160.811 127.109 154.133 97.0843 154.133 97.0843Z" fill="url(#paint0_radial_0_1)"/>
        <path d="M1 102.437L32.778 92.1967C32.778 92.1967 44.2918 128.14 20.5243 125.501C9.29941 124.254 1 102.437 1 102.437Z" fill="url(#paint1_radial_0_1)"/>
        <path d="M121.092 102.197C121.092 112.138 128.682 120.197 138.046 120.197C147.409 120.197 155 112.138 155 102.197C155 92.2556 147.409 84.1967 138.046 84.1967C128.682 84.1967 121.092 92.2556 121.092 102.197Z" fill="#010101"/>
        <path d="M17.9541 120.197C27.3176 120.197 34.9082 112.138 34.9082 102.197C34.9082 92.2556 27.3176 84.1967 17.9541 84.1967C6.97689 84.1967 0.999997 94.0818 0.999997 102.197C0.999997 109.164 5.13166 118.857 17.9541 120.197Z" fill="#010101"/>
        <path d="M121.092 102.197C121.092 112.138 128.682 120.197 138.046 120.197C147.409 120.197 155 112.138 155 102.197C155 92.2556 147.409 84.1967 138.046 84.1967C128.682 84.1967 121.092 92.2556 121.092 102.197Z" stroke="black"/>
        <path d="M17.9541 120.197C27.3176 120.197 34.9082 112.138 34.9082 102.197C34.9082 92.2556 27.3176 84.1967 17.9541 84.1967C6.97689 84.1967 0.999997 94.0818 0.999997 102.197C0.999997 109.164 5.13166 118.857 17.9541 120.197Z" stroke="black"/>
        <path d="M148.25 157.334C149.81 156.172 150.618 155.375 151.767 153.804C158.828 144.156 133.757 149.078 122.219 146.038C111.777 143.287 106.201 140.288 95.4848 138.978C85.9392 137.811 80.4345 138.069 70.8612 138.978C58.2522 140.175 51.2524 142.126 39.2022 146.038C31.3382 148.591 27.6824 152.61 19.5032 153.804C14.3374 154.558 7.46461 148.738 6.13611 153.804C4.76237 159.043 14.1122 157.061 19.5032 157.334C29.0482 157.818 33.4673 151.97 42.7198 149.568C58.0299 145.594 67.0072 143.881 82.8212 143.92C98.2737 143.958 106.983 145.999 121.958 149.507L122.219 149.568C132.547 151.987 139.733 163.675 148.25 157.334Z" fill="#010101" stroke="black"/>
        <path d="M74.4828 118.197C74.4828 119.854 75.7178 121.197 77.2414 121.197C78.7649 121.197 80 119.854 80 118.197C80 116.54 78.7649 115.197 77.2414 115.197C75.7178 115.197 74.4828 116.54 74.4828 118.197Z" fill="#586362"/>
        <path d="M60 118.197C60 119.854 61.2351 121.197 62.7586 121.197C64.2822 121.197 65.5172 119.854 65.5172 118.197C65.5172 116.54 64.2822 115.197 62.7586 115.197C61.2351 115.197 60 116.54 60 118.197Z" fill="#586362"/>
        <defs>
        <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.0971 29.2002) rotate(90) scale(112.637 338.92)">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.0971 29.2002) rotate(90) scale(112.637 338.92)">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
        </radialGradient>
        </defs>
      </svg>
    </>
  );
}

export const Header = () => {
  const [active, setActive] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture({
    onDrag: (props) => {
      const { down, movement: [x, y], event } = props;
      event.preventDefault();
      set.start({xy: down ? [x, y] : [0, 0]});
    },
    onDragStart: () => {
      setActive(true);
    },
    onDragEnd: () => {
      setActive(false);
    }
  });
  return (
    <header className={styles.Header}>
      <div className={styles.bg}>
        <animated.div 
          className={styles.box} 
          {...bind()} 
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
          }}
        >
          <Icon isActive={active} />
        </animated.div>
      </div>
    </header>
  );
};

export const WednesdayHeader = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture({
    onDrag: (props) => {
      const { down, movement: [x, y], event } = props;
      event.preventDefault();
      set.start({xy: down ? [x, y] : [0, 0]});
    }
  });
  return (
    <header className={styles.Header}>
      <div className={styles.wednesdayBg}>
        <animated.div 
          className={styles.wednesdayBox} 
          {...bind()} 
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
          }}
        >
          <WednesdayIcon />
        </animated.div>
      </div>
    </header>
  );
};