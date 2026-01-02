import { Observable } from 'rxjs';

interface OpenPdfParams {
  orderId: string | null;
  download$: (orderId: string) => Observable<Blob>;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
}

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

export function openPdf({
  orderId,
  download$,
  setLoading,
  setError
}: OpenPdfParams) {
  if (!orderId) return;

  setLoading(true);

  download$(orderId).subscribe({
    next: (data) => {
      // 1. Crear el Blob
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // 2. ABRIR EN PESTAÑA (Sin descargar)
      // La clave es NO poner el atributo 'download'
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank'; // Abrir en nueva pestaña
      // link.download = ...; <--- ¡BORRA ESTA LÍNEA! Si la dejas, se descarga y deja la pestaña en blanco.

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 3. Limpieza diferida (importante no hacerlo muy rápido)
      // Esperamos 1 minuto para asegurar que el PDF cargó en la otra pestaña
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 60000);

      setLoading(false);
    },
    error: (err) => {
      console.error(err);
      setError('No se pudo abrir el ticket.');
      setLoading(false);
    }
  });
}
