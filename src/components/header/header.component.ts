import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuVisible = false;
  selectedContent: string | null = null;
  selectedContentTitle: string | null = null;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu(): void {
    this.isMenuVisible = false;
  }

  showContent(option: string): void {
    this.closeMenu();
  }
}
