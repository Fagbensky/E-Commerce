import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { AdsbannerService} from 'src/app/services/homepage/ads/adsbanner.service'
import { AdsBanner } from 'src/app/services/homepage/ads/adsbannerInterface';

@Component({
  selector: 'app-ads-banner',
  templateUrl: './ads-banner.component.html',
  styleUrls: ['./ads-banner.component.scss']
})
export class AdsBannerComponent implements OnInit {

  constructor(private adsBannerService: AdsbannerService) { }

  ngOnInit(): void {
  }

  adsBanner$ = this.adsBannerService.adsBanner$
    .pipe(
      map(adsBanners =>
        adsBanners.map(adsBanner => ({
          ...adsBanner,
          adsImages: `url(/assets/images/homepage/adBanner/${adsBanner.adsImages})`

        }) as AdsBanner)
      )
    );

  classStyes: string[] = ["col-span-3", "col-span-2", "col-span-2"];


}
