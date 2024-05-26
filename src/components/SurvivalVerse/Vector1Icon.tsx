import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 1116 514'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <path
      d='M803.79 0.457764H13.6838C6.50411 0.457764 0.683807 6.27804 0.683807 13.4577V500.686C0.683807 507.866 6.50408 513.686 13.6838 513.686H1102.32C1109.5 513.686 1115.32 507.866 1115.32 500.686V67.7619C1115.32 60.5822 1109.5 54.7619 1102.32 54.7619H873.468C859.384 54.7619 846.456 46.9729 839.874 34.5222L830.312 16.4365C825.116 6.60705 814.909 0.457764 803.79 0.457764Z'
      fill='url(#pattern0_18_13)'
    />
    <path
      d='M803.79 0.457764H13.6838C6.50411 0.457764 0.683807 6.27804 0.683807 13.4577V500.686C0.683807 507.866 6.50408 513.686 13.6838 513.686H1102.32C1109.5 513.686 1115.32 507.866 1115.32 500.686V67.7619C1115.32 60.5822 1109.5 54.7619 1102.32 54.7619H873.468C859.384 54.7619 846.456 46.9729 839.874 34.5222L830.312 16.4365C825.116 6.60705 814.909 0.457764 803.79 0.457764Z'
      fill='url(#paint0_linear_18_13)'
      fillOpacity={0.72}
    />
    <defs>
      <pattern id='pattern0_18_13' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_18_13' transform='matrix(0.000833333 0 0 0.00180984 0 -0.0818631)' />
      </pattern>
      <linearGradient
        id='paint0_linear_18_13'
        x1={614.613}
        y1={257.072}
        x2={560.586}
        y2={514.229}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
      <image
        id='image0_18_13'
        width={1200}
        height={643}
      />
    </defs>
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };