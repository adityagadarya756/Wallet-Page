import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Frame36Icon } from './Frame36Icon.js';
import { Frame37Icon } from './Frame37Icon.js';
import classes from './SurvivalVerse.module.css';
import { Vector1Icon } from './Vector1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const SurvivalVerse: FC<Props> = memo(function SurvivalVerse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame34}>
        <div className={classes.title}>Calling All Survivors!</div>
        <div className={classes.title2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Survivalist Season 1 </span>
            <span className={classes.label2}>is now live.</span>
          </p>
        </div>
      </div>
      <div className={classes.title3}>
        Contribute to the Survival Verse ecosystem and unlock access to exclusive rewards, allocations, giveaways and a
        whole lot more.
      </div>
      <div className={classes.frame33}>
        <div className={classes.field}>
          <div className={classes.title4}>Enter wallet address</div>
        </div>
        <button className={classes.bUTTON}>
          <div className={classes.joinSurvivalist}>Join Survivalist</div>
        </button>
      </div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.keyForVdoTeaser1}></div>
      <div className={classes.navlniks}>
        <div className={classes.nAVLINK}>
          <div className={classes.image2}></div>
        </div>
        <div className={classes.navlink2}>
          <div className={classes.image4}></div>
        </div>
        <div className={classes.navlink3}>
          <div className={classes.image6}></div>
        </div>
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon2} />
      </div>
      <div className={classes.survivalVerseLogoSmall1}></div>
      <div className={classes.frame37}>
        <Frame37Icon className={classes.icon3} />
      </div>
      <div className={classes.frame36}>
        <Frame36Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.survivalVerse}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Survival</span>
          <span className={classes.label4}> </span>
          <span className={classes.label5}>V</span>
          <span className={classes.label6}>erse</span>
        </p>
      </div>
    </div>
  );
});
