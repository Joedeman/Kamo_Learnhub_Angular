import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = '';
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateActiveSection();
    }
  }

  ngOnDestroy(): void {
    // Clean up body class if component is destroyed while menu is open
    if (this.isBrowser) {
      document.body.classList.remove('menu-open');
    }
  }

  /**
   * Detect scroll and add/remove scrolled class
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isBrowser) return;

    const navbar = document.querySelector('.navbar');
    
    // Add scrolled class after scrolling 50px
    if (window.scrollY > 50) {
      this.isScrolled = true;
      navbar?.classList.add('navbar--scrolled');
    } else {
      this.isScrolled = false;
      navbar?.classList.remove('navbar--scrolled');
    }

    // Update active section based on scroll position
    this.updateActiveSection();
  }

  /**
   * Toggle mobile menu and lock/unlock body scroll
   */
  toggleMenu(): void {
    if (!this.isBrowser) return;

    this.isMenuOpen = !this.isMenuOpen;
    
    // Lock body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  /**
   * Close mobile menu when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const navbar = document.querySelector('.navbar');
    
    // Close menu if clicking outside navbar
    if (this.isMenuOpen && navbar && !navbar.contains(target)) {
      this.closeMenu();
    }
  }

  /**
   * Close menu on escape key
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  /**
   * Scroll to section smoothly
   */
  scrollToSection(href: string, event?: Event): void {
    if (!this.isBrowser) return;

    if (event) {
      event.preventDefault();
    }

    this.closeMenu();
    
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update active section immediately
      setTimeout(() => {
        this.activeSection = href;
      }, 100);
    }
  }

  /**
   * Close mobile menu
   */
  closeMenu(): void {
    if (!this.isBrowser) return;

    this.isMenuOpen = false;
    document.body.classList.remove('menu-open');
  }

  /**
   * Check if a link is active
   */
  isLinkActive(href: string): boolean {
    return this.activeSection === href;
  }

  /**
   * Update active section based on scroll position
   */
  private updateActiveSection(): void {
    if (!this.isBrowser) return;

    const sections = this.navLinks.map(link => link.href);
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.querySelector(sections[i]);
      if (section) {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop) {
          this.activeSection = sections[i];
          break;
        }
      }
    }

    // If at the very top, clear active section
    if (window.scrollY < 100) {
      this.activeSection = '';
    }
  }

  /**
   * Navigate to LearnHub
   */
  navigateToLearnHub(): void {
    this.closeMenu();
    console.log('Navigate to LearnHub');

    this.router.navigate(['/login']);
  }

  /**
   * Scroll to top
   */
  scrollToTop(): void {
    if (!this.isBrowser) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.activeSection = '';
  }
}