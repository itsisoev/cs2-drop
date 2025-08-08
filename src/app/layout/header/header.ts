import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderLink} from '../../shared/models/links.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'layout-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  links = signal<HeaderLink[]>([
    {
      label: 'Каталог',
      href: '/',
    },
    {
      label: 'Помощь',
      href: '/',
    },
    {
      label: 'Отзыв',
      href: '/',
    },
  ])
}
