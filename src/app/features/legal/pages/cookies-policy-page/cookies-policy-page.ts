import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CookieType } from '../../interfaces/components';
import CookiesAuditory from '../../components/cookies-policy/cookies-auditory/cookies-auditory';
import ManagementCookies from '../../components/cookies-policy/management-cookies/management-cookies';
import HeaderCookies from '../../components/cookies-policy/header-cookies/header-cookies';
import ExplanatorySection from '../../components/cookies-policy/explanatory-section/explanatory-section';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-cookies-policy-page',
  imports: [CommonModule, CookiesAuditory, ManagementCookies, HeaderCookies, ExplanatorySection],
  templateUrl: './cookies-policy-page.html',
  styleUrl: './cookies-policy-page.scss',
})
export default class CookiesPolicyPage implements OnInit {
lastUpdated = signal(new Date());
private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setPageMeta({
      title: 'Política de Cookies',
      description: 'Conoce nuestra política de cookies y cómo utilizamos las tecnologías de rastreo en nuestro sitio web.',
      noIndex: false
    });
  }

  definitions: Record<string, string> = {
    'Session': 'Se eliminan automáticamente cuando cierras el navegador.',
    'Persistent': 'Permanecen en tu dispositivo hasta que expiran o las borras manualmente.',
    'First-party': 'Creadas directamente por SeatGuard.',
    'Third-party': 'Creadas por servicios externos (ej. Stripe, Google) que usamos.'
  };

  auditTable: CookieType[] = [
    {
      name: 'tokenAccess',
      provider: 'SeatGuard',
      duration: 'Session',
      purpose: 'Mantiene tu sesión iniciada de forma segura (JWT).',
      category: 'necessary'
    },
    {
      name: 'stripe_mid',
      provider: 'Stripe',
      duration: '1 año',
      purpose: 'Prevención de fraude durante el proceso de pago.',
      category: 'necessary'
    },
    {
      name: 'cart_timer',
      provider: 'SeatGuard',
      duration: '15 min',
      purpose: 'Sincroniza el contador de bloqueo de asientos entre pestañas.',
      category: 'functional'
    },
    {
      name: 'theme_pref',
      provider: 'SeatGuard',
      duration: 'Persistent',
      purpose: 'Recuerda si prefieres modo claro u oscuro.',
      category: 'functional'
    }
  ];

  activeFilter = signal<'all' | 'necessary' | 'analytics' | 'functional'>('all');

  get filteredCookies() {
    if (this.activeFilter() === 'all') return this.auditTable;
    return this.auditTable.filter(c => c.category === this.activeFilter());
  }

  setFilter(filter: 'all' | 'necessary' | 'analytics' | 'functional') {
    this.activeFilter.set(filter);
  }
}
