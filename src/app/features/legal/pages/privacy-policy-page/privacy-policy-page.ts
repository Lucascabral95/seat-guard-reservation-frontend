import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PolicySection } from '../../interfaces/components';
import HeroSection from '../../components/privacy-policy/hero-section/hero-section';
import LegalContent from '../../components/privacy-policy/legal-content/legal-content';
import VisualSummary from '../../components/privacy-policy/visual-summary/visual-summary';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [CommonModule, HeroSection, LegalContent, VisualSummary],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.scss',
})
export default class PrivacyPolicyPage {
  lastUpdated = new Date();

  policySections: PolicySection[] = [
    {
      title: '1. Recopilación de Datos',
      content: 'Para procesar tu reserva de entradas, recopilamos información estrictamente necesaria: Nombre, Apellido, Email y datos técnicos del dispositivo (IP) para gestionar el bloqueo de asientos en tiempo real (WebSocket).'
    },
    {
      title: '2. Datos de Pago (Stripe)',
      content: 'SeatGuard NO almacena ni procesa números completos de tarjetas de crédito. Toda la información financiera es transmitida directamente a Stripe mediante encriptación SSL/TLS. Nosotros solo recibimos un "token" de confirmación y los últimos 4 dígitos para tu recibo.'
    },
    {
      title: '3. Uso de la Información',
      content: 'Utilizamos tus datos exclusivamente para: (a) Emitir y enviarte tus tickets QR; (b) Comunicar cambios en el evento (reprogramaciones); (c) Prevenir el fraude en la compra de entradas masivas.'
    },
    {
      title: '4. No Venta de Datos',
      content: 'Bajo ninguna circunstancia vendemos, alquilamos ni compartimos tu información personal con anunciantes, redes sociales o terceros ajenos a la organización del evento específico que has reservado.'
    },
    {
      title: '5. Retención de Datos',
      content: 'Conservamos los datos de la transacción por el período legalmente requerido para fines contables y fiscales. Los datos de sesión (bloqueo de asientos) se eliminan automáticamente tras 15 minutos de inactividad.'
    }
  ];
}
