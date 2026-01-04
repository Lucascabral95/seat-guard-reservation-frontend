import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { LegalSection } from '../../interfaces/components';
import SidebarContentLegal from '../../components/terms-conditions/sidebar-content-legal/sidebar-content-legal';
import HeaderMinimalist from '../../components/terms-conditions/header-minimalist/header-minimalist';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-terms-conditions-page',
  imports: [CommonModule, SidebarContentLegal, HeaderMinimalist],
  templateUrl: './terms-conditions-page.html',
  styleUrl: './terms-conditions-page.scss',
})
export default class TermsConditionsPage implements OnInit {
  private seo = inject(SeoService);

  lastUpdated = signal<Date>(new Date());

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Términos y Condiciones - SeatGuard',
      description: 'Términos y condiciones de uso de la plataforma SeatGuard para reserva de entradas en tiempo real.',
      noIndex: false
    });
  }

  sections: LegalSection[] = [
    {
      id: 'acceptance',
      title: '1. Aceptación de los Términos',
      content: [
        'Bienvenido a SeatGuard. Al acceder, navegar o utilizar nuestra plataforma de reserva de entradas en tiempo real, usted acepta estar legalmente vinculado por estos Términos y Condiciones.',
        'Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios de compra y reserva de asientos.'
      ]
    },
    {
      id: 'realtime-booking',
      title: '2. Tecnología de Reserva y Bloqueo',
      content: [
        'SeatGuard utiliza tecnología de WebSocket y Signals para garantizar la disponibilidad de asientos en tiempo real. Sin embargo, debido a la naturaleza de la alta concurrencia:',
        'El "Bloqueo de Asiento" es temporal (generalmente 10-15 minutos). Si la transacción de pago no se completa dentro de este período a través de Stripe, el sistema liberará automáticamente los asientos para otros usuarios.',
        'SeatGuard no se hace responsable por fallos de red del lado del cliente que impidan completar el checkout dentro del tiempo límite.'
      ]
    },
    {
      id: 'payments',
      title: '3. Pagos y Procesamiento',
      content: [
        'Todas las transacciones son procesadas de forma segura a través de Stripe. SeatGuard no almacena información completa de tarjetas de crédito en sus servidores.',
        'El precio final incluye el valor nominal de la entrada más un Cargo por Servicio (Service Charge) no reembolsable destinado al mantenimiento de la plataforma.',
        'La emisión del ticket digital (QR) está condicionada a la aprobación exitosa del pago por parte de la entidad bancaria y Stripe.'
      ]
    },
    {
      id: 'refunds',
      title: '4. Política de Reembolsos y Cancelaciones',
      content: [
        'Todas las ventas son finales. No se aceptan cambios ni devoluciones excepto en caso de cancelación definitiva del evento por parte del organizador.',
        'En caso de cancelación del evento, se reembolsará el valor nominal de la entrada. Los cargos por servicio no son reembolsables, ya que corresponden al servicio tecnológico ya prestado al momento de la compra.'
      ]
    },
    {
      id: 'digital-tickets',
      title: '5. Tickets Digitales y Acceso',
      content: [
        'El usuario es responsable de mantener la seguridad de su cuenta y de sus tickets digitales (QR).',
        'La entrada es válida únicamente para un solo escaneo. SeatGuard implementa medidas antifraude, pero no se hace responsable si un tercero accede al evento utilizando una copia no autorizada de su QR debido a negligencia en la custodia del mismo.'
      ]
    },
    {
      id: 'liability',
      title: '6. Limitación de Responsabilidad',
      content: [
        'SeatGuard actúa como intermediario tecnológico entre el organizador del evento y el comprador.',
        'No somos responsables por cambios en el lineup, horarios, condiciones del recinto o seguridad física durante el evento.'
      ]
    }
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  printPage() {
    window.print();
  }
}
