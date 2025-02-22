import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {AdvantagesType} from "../../types/advantages.type";
import {TextCustomPipePipe} from "../../pipes/text-custom.pipe.pipe";

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [
    NgForOf,
    TextCustomPipePipe
  ],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.css'
})
export class AdvantagesComponent {

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];
}
