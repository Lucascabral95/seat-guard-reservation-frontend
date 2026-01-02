// import { Observable } from 'rxjs';

// interface OpenPdfParams {
//   orderId: string | null;
//   download$: (orderId: string) => Observable<Blob>;
//   setLoading: (value: boolean) => void;
//   setError: (message: string | null) => void;
// }

// export function openPdf({
//   orderId,
//   download$,
//   setLoading,
//   setError
// }: OpenPdfParams) {
//   if (!orderId) {
//     setError('No se pudo obtener el ID de la orden');
//     setLoading(false);
//     return;
//   }

//   setLoading(true);
//   setError(null);

//   download$(orderId).subscribe({
//     next: (blob) => {
//       const url = URL.createObjectURL(blob);

//       window.open(url, '_blank');

//       setLoading(false);
//     },
//     error: () => {
//       setError('Error al abrir el ticket');
//       setLoading(false);
//     }
//   });
// }

// shared/utils/open-pdf.utils.ts
import { Observable } from 'rxjs';

interface OpenPdfParams {
  orderId: string | null;
  download$: (orderId: string) => Observable<Blob>;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
}

export function openPdf({
  orderId,
  download$,
  setLoading,
  setError
}: OpenPdfParams) {
  if (!orderId) {
    setError('No se pudo obtener el ID de la orden');
    setLoading(false);
    return;
  }

  setLoading(true);
  setError(null);

  download$(orderId).subscribe({
    next: (data) => {
      // 1. Crear Blob explícito
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // 2. ESTRATEGIA: Elemento <a> invisible
      // Esto funciona mejor que window.open directo para Blobs en muchos navegadores
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.download = `ticket-${orderId}.pdf`; // Sugerir nombre de archivo

      document.body.appendChild(link);
      link.click();

      // 3. Limpieza diferida
      // Damos tiempo al navegador para renderizar antes de revocar
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 1000);

      setLoading(false);
    },
    error: (err) => {
      console.error('Error:', err);
      setError('Error al abrir el ticket');
      setLoading(false);
    }
  });
}
