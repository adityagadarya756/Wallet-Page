import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 77 77' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={38.8292} cy={38.8621} r={38.042} fill='black' fillOpacity={0.86} />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
