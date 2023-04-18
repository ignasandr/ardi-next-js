import React from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export default function Example (props: ButtonProps) {
  const { primary, size, backgroundColor, label, ...other } = props;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      {/* <button
        className="border-red-300"
        type="button"
        {...other}
      >
        {label}
      </button> */}
    <h1 className="text-3xl font-semi-bold m-8">Hello, Next.js!</h1>
    <p className="m-8 ">Something something</p>
    </>
  );
};

// export const Example = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  
//   return (
//     <button
//       type="button"
//     >
//       {label}
//     </button>
//   );
// };
