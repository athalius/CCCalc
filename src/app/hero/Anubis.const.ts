import { Hero } from 'app/hero/hero.interface';
import { Evolution } from 'app/hero/evolution.interface';

export const Anubis: Hero = {
  base: {
    HPPerStar: 3600,
    baseHP: 0,
    HpIncrease: 160,
    AttackSpeed: 1000,
    Accuracy: 159,
    DamageIncrease: 12,
    DamagePerStar: 205,
    DamageBase: 0
  },
  e: {
    HPPerStar: 5040,
    baseHP: 28720,
    HpIncrease: 240,
    AttackSpeed: 1000,
    Accuracy: 204,
    DamageIncrease: 12,
    DamagePerStar: 287,
    DamageBase: 591
  },
  ee: {
    HPPerStar: 10080,
    baseHP: 53240,
    HpIncrease: 360,
    AttackSpeed: 1000,
    Accuracy: 294,
    DamageIncrease: 12,
    DamagePerStar: 574,
    DamageBase: 588
  }

}
