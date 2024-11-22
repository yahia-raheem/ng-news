import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/global/header/header.component";
import { HeroComponent } from "../../components/global/hero/hero.component";
import { BgCaption1Component } from "../../components/bahrain/bg-caption-1/bg-caption-1.component";
import { QuoteComponent } from "../../components/bahrain/quote/quote.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bahrain',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, BgCaption1Component, QuoteComponent],
  templateUrl: './bahrain.page.html',
  styleUrl: './bahrain.page.scss'
})
export class BahrainPage {
  private _title = inject(Title)
  private _meta = inject(Meta)
  constructor() {
    this._title.setTitle($localize`:@@bahrain.PageTitle:التكلفة الخفية - تدهور مصايد الأسماك في البحرين نتيجة التوسع في تحلية المياه`)
    this._meta.addTags([
      {name: "description", content: $localize`:@@bahrain.PageDesc:وفق من تحدثت معهم "مواطن" من خبراء وباحثين، إضافة لدراسات علمية منشورة، تسببت محطات تحلية "الدور 1 و 2" في زيادة ملوحة مياه الخليج العربي في البحرين عن المعدلات الطبيعية، بفعل صرف المياه المرتجعة من التحلية في أعماق قليلة، مما أثّر بالسلب على الحيوانات القاعية والحشائش البحرية وبالتبعية على صيادي المنطقة.`},
      {name: "og:image", content: $localize`:@@bahrain.PageSMImage:https://test.cloudmaize.com/bahrain/cover.png`}
    ])
  }
}
