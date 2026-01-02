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
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = URL.createObjectURL(pdfBlob);

      window.open(url, '_blank');


      setLoading(false);
    },
    error: () => {
      setError('Error al abrir el ticket');
      setLoading(false);
    }
  });
}
