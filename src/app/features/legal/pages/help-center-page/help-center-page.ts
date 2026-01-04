import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FAQ, QuickTopic } from '../../interfaces/components';
import QuickTopics from '../../components/help-center/quick-topics/quick-topics';
import Contact from '../../components/help-center/contact/contact';
import FaqCollapse from '../../components/help-center/faq-collapse/faq-collapse';
import HeroSectionHelp from '../../components/help-center/hero-section-help/hero-section-help';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-help-center-page',
  imports: [CommonModule, QuickTopics, Contact, FaqCollapse, HeroSectionHelp],
  templateUrl: './help-center-page.html',
  styleUrl: './help-center-page.scss',
})
export default class HelpCenterPage implements OnInit {
    private seo = inject(SeoService);

     ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Centro de Ayuda',
      description:
        'Encontrá respuestas sobre tickets, pagos, seguridad y eventos. Estamos para ayudarte en cada paso.',
      noIndex: true,
    });
  }

   quickTopics: QuickTopic[] = [
    { icon: 'ticket', title: 'Mis Tickets', desc: 'Accesos a PDF y descargas.' },
    { icon: 'credit-card', title: 'Pagos', desc: 'Facturación y Stripe.' },
    { icon: 'user', title: 'Seguridad', desc: 'Cuenta y contraseñas.' },
    { icon: 'calendar', title: 'Eventos', desc: 'Horarios y fechas.' },
  ];

  faqs: FAQ[] = [
    {
      question: '¿Por qué se liberó mi asiento?',
      answer: 'El sistema de bloqueo en tiempo real dura exactamente 15 minutos. Si el pago no se confirma en ese lapso, los asientos se liberan automáticamente.',
      isOpen: false
    },
    {
      question: 'No recibí el email con mis entradas',
      answer: 'Revisa Spam. De todos modos, siempre puedes descargar tus tickets ingresando a tu perfil en la sección "Mis Tickets".',
      isOpen: false
    },
    {
      question: '¿Es seguro pagar con tarjeta?',
      answer: 'Sí. Utilizamos Stripe para procesar los pagos. SeatGuard nunca almacena los datos completos de tu tarjeta de crédito.',
      isOpen: false
    },
    {
      question: 'Política de devoluciones',
      answer: 'Debido a la naturaleza del espectáculo, no se aceptan devoluciones salvo cancelación oficial del evento por parte del organizador.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    if (this.faqs[index].isOpen) {
      this.faqs[index].isOpen = false;
    } else {
      this.faqs.forEach(f => f.isOpen = false);
      this.faqs[index].isOpen = true;
    }
  }
}
