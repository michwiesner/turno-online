import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isMenuOpen: boolean = false;

  optionsMenu = [
    { url: './profile', name: 'Perfil', icon: 'bi bi-person' },
    { url: './appointments', name: 'Citas', icon: 'bi bi-calendar4-week' },
    { url: './patients', name: 'Pacientes', icon: 'bi bi-people' },
    { url: './help', name: 'Ayuda', icon: 'bi bi-question' },
    { url: './settings', name: 'Configuración', icon: 'bi bi-gear' },
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  signout() {
    this.route.navigateByUrl('/');
  }
}
