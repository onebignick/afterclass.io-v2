import { CustomIcon, type CustomIconProps } from "./CustomIcon";

export const HeartUnfilledIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.3911 4.49991L12.0005 5.34913L12.6098 4.49991C13.67 3.02237 15.394 2.06 17.3458 2.06C20.5642 2.06 23.1738 4.66949 23.1738 7.88866C23.1738 8.34014 23.1166 8.7809 23.0152 9.21121L23.0089 9.23758L23.0047 9.26432C22.5817 11.8961 20.8833 14.6798 18.679 17.0354C16.5654 19.2939 14.0722 21.0671 12.0005 21.8871C9.92841 21.0671 7.43526 19.2939 5.32159 17.0353C3.11714 14.6797 1.41855 11.8957 0.994954 9.2635L0.99082 9.23781L0.984915 9.21247C0.884337 8.78082 0.827148 8.33947 0.827148 7.88866C0.827148 4.66893 3.43665 2.06 6.65582 2.06C8.60691 2.06 10.3309 3.02234 11.3911 4.49991Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};