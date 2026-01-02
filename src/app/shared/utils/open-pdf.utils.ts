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
      // 1. IMPORTANTE: Recrear el Blob forzando el tipo 'application/pdf'
      // Esto arregla que se vea como texto crudo (%PDF-1.3...)
      const file = new Blob([data], { type: 'application/pdf' });

      // 2. Crear la URL del objeto
      const fileURL = URL.createObjectURL(file);

      // 3. Abrir en nueva pestaña
      const pdfWindow = window.open(fileURL, '_blank');

      // Fallback: Si el bloqueador de popups impide abrirlo
      if (!pdfWindow) {
          setError("El navegador bloqueó la ventana. Por favor permite pop-ups.");
      }

      setLoading(false);
    },
    error: (err) => {
      console.error(err);
      setError('Error al descargar el ticket');
      setLoading(false);
    }
  });
}
