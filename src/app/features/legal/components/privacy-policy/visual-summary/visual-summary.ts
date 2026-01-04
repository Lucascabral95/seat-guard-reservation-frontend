import { Component } from '@angular/core';
import CardVisualSummary from './card-visual-summary/card-visual-summary';
import { CardPropertiesInterface } from '../../../interfaces/components';

@Component({
  selector: 'component-privacy-policy-visual-summary',
  imports: [CardVisualSummary],
  templateUrl: './visual-summary.html',
  styleUrl: './visual-summary.scss',
})
export default class VisualSummary {
   cardDetails: CardPropertiesInterface[] = [
    {
      title: 'Pagos Encriptados',
      content: 'Procesamiento bancario delegado 100% a Stripe. No tocamos tus datos sensibles.',
      svg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      colorSvg: "text-green-600",
    },
    {
      title: 'Sin Publicidad',
      content: 'No vendemos tu historial de compras a anunciantes ni redes de marketing.',
      svg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>',
      colorSvg: "text-blue-600"
    },
    {
      title: 'Derecho de Acceso',
      content: 'Puedes solicitar la eliminación completa de tu cuenta en cualquier momento.',
      svg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
      colorSvg: "text-purple-600"
    },
   ]
}
