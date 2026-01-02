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
    next: (blob) => {
      const url = URL.createObjectURL(blob);

      window.open(url, '_blank');

      setLoading(false);
    },
    error: () => {
      setError('Error al abrir el ticket');
      setLoading(false);
    }
  });
}

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
//     next: (data) => {
//       // 1. Verificación de seguridad: si el blob es muy pequeño, probablemente sea un error JSON
//       if (data.size < 100) {
//         console.error('El archivo recibido es demasiado pequeño, posible error del servidor.');
//         setError('Error al generar el ticket.');
//         setLoading(false);
//         return;
//       }

//       // 2. Forzamos el tipo PDF (crucial para que el navegador no lo trate como texto)
//       const pdfBlob = new Blob([data], { type: 'application/pdf' });

//       // 3. Creamos la URL
//       const url = URL.createObjectURL(pdfBlob);

//       // 4. SOLUCIÓN BLANCO: Usar un elemento <a> en lugar de window.open directo
//       // Esto evita problemas de bloqueo de popups y contextos de seguridad
//       const link = document.createElement('a');
//       link.href = url;
//       link.target = '_blank'; // Abrir en nueva pestaña
//       link.rel = 'noopener noreferrer'; // Buenas prácticas de seguridad

//       // Opcional: Si prefieres que se descargue directamente en lugar de abrirse, descomenta esto:
//       // link.download = `ticket-${orderId}.pdf`;

//       document.body.appendChild(link); // Necesario en Firefox
//       link.click();

//       // Limpieza
//       setTimeout(() => {
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url); // Liberar memoria después de que se haya abierto
//       }, 100);

//       setLoading(false);
//     },
//     error: (err) => {
//       console.error('Error descargando PDF:', err);
//       setError('Error al abrir el ticket');
//       setLoading(false);
//     }
//   });
// }
