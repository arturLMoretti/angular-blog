import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  links: { label: string, link: string }[] = [{
    label: 'Home',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Contact',
    link: '/contact'
  },
  {
    label: 'Blog',
    link: '/blog'
  },
];
  socials: string[] = ['Facebook', 'Twitter', 'Instagram', 'Youtube'];
}
