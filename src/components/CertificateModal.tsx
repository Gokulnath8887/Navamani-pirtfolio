import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';


interface CertificateModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function CertificateModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}: CertificateModalProps) {
  
  useEffect(() => {
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) onNext();
      if (e.key === 'ArrowLeft' && images.length > 1) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-inter">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 modal-overlay backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={onPrev}
            className="absolute left-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={onNext}
            className="absolute right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative z-40 max-w-[90vw] max-h-[85vh] flex flex-col items-center animate-in zoom-in-95 duration-300">
        <img 
          src={images[currentIndex]} 
          alt={`Certificate ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
