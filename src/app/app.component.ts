import { Component, OnInit } from '@angular/core';

import { berserk } from './const/berzerk.const'
import { celebrate } from './const/celebrate.const'
import { ariesFrenzy } from './const/ariesFrenzy.const'
import { blitzScroll } from './const/blitzScroll.const'
import { unbridledFury } from './const/unbridledFury.const'
import { divinity } from './const/divinity.const'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  attackSpeed = 1000;
  celebrateLevel = null;
  berzerkLevel = null;
  blitzLevel = null;
  frenzyLevel = null;
  divinityLevel = null
  furyLevel = null;
  freeForm = 0;

  berzerk = null
  celebrate = null
  ariesFrenzy = null
  blitzScroll = null
  unbridledFury = null
  divinity = null

  attackSpeeds = [{
    CalculatedSpeed: 1000,
    RoundedSpeed: 1000,
    AttacksPerSecond: 1
  }]
  title = 'CC Attack speed calc';

  constructor() {
    this.berzerk = berserk
    this.celebrate = celebrate
    this.ariesFrenzy = ariesFrenzy
    this.blitzScroll = blitzScroll
    this.unbridledFury = unbridledFury
    this.divinity = divinity
  }

  ngOnInit() {
    this.celebrateLevel = this.celebrate[0].value
    this.berzerkLevel = this.blitzScroll[0].value
    this.blitzLevel = this.celebrate[0].value
    this.frenzyLevel = this.ariesFrenzy[0].value
    this.divinityLevel = this.divinity[0].value
    this.furyLevel = this.unbridledFury[0].value
  }

  calc = function () {
    const freeMulti = this.freeForm / 100;
    this.attackSpeeds = [{
      CalculatedSpeed: this.calcAttackSpeed(
        this.attackSpeed, freeMulti, this.berzerkLevel, this.blitzLevel, this.frenzyLevel, this.divinityLevel, this.furyLevel),
      RoundedSpeed: 200 * Math.ceil(
        this.calcAttackSpeed(
          this.attackSpeed, freeMulti, this.berzerkLevel, this.blitzLevel, this.frenzyLevel, this.divinityLevel, this.furyLevel) / 200,
      ),
      AttacksPerSecond: 1
    }]

    if (this.celebrateLevel > 1) {
      for (let l = this.attackSpeeds[0].CalculatedSpeed, n = 0; n < 10; n++) {
        l /= this.celebrateLevel
        this.attackSpeeds.push({
          CalculatedSpeed: l,
          RoundedSpeed: 200 * Math.ceil(l / 200),
          AttacksPerSecond: 1000 / (200 * Math.ceil(l / 200))
        })
      }

    }

  }
  calcAttackSpeed = function (attackSpeed, freeMultipler, berzerkLevel, blitzLevel, frenzyLevel, divinityLevel, furyLevel) {
    if (freeMultipler === 0) { freeMultipler = 1 }
    return attackSpeed / (freeMultipler * berzerkLevel * blitzLevel * frenzyLevel * divinityLevel * furyLevel)
  }
  round = function (l, n = 3) {

    const u = Math.pow(10, n);
    return Math.round(l * u) / u
  }

  calcCol = function (l) {
    let n = '';
    return l.AttacksPerSecond > 2 && (n = '#f0ad4e'), 5 === l.AttacksPerSecond && (n = '#d9534f'), n
  }

  calcTextCol = function (l) {
    let n = '';
    return l.AttacksPerSecond > 2 && (n = '#fff'), n
  }
}
