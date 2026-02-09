import { useState, useRef } from "react";
import { X, Play } from "lucide-react";
import { MapView } from "@/components/Map";
import { Button } from "@/components/ui/button";

/**
 * Home Page - Onde a Cidade Desacelera
 * 
 * Design Philosophy: Organic Contemporary
 * - Warm, natural color palette (sage green, coral, gold)
 * - Fluid, organic shapes and smooth transitions
 * - Large, breathing typography with ample whitespace
 * - Contemplative, inviting aesthetic
 */

const SANTA_RITA_CENTER = {
  lat: -21.9249,
  lng: -45.8982,
};

const YOUTUBE_VIDEO_ID = "7IClhQ0qQwE";

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Create custom marker with pulsing animation
    const marker = new google.maps.Marker({
      position: SANTA_RITA_CENTER,
      map: map,
      title: "Centro de Santa Rita do Sapucaí",
      animation: google.maps.Animation.DROP,
    });

    markerRef.current = marker;

    // Add click listener to marker
    marker.addListener("click", () => {
      setShowVideoModal(true);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/QYnBQN7KRH7QbTGagPOhDD/sandbox/PYy1zAXiUxBfnPTUrTtiUx-img-1_1770681322000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUVluQlFON0tSSDdRYlRHYWdQT2hERC9zYW5kYm94L1BZeTF6QVhpVXhCZm5QVFVyVHRpVXgtaW1nLTFfMTc3MDY4MTMyMjAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YSfOUxTH~bkdAB79R1xsUocwtypQXHcDrXHQ6-Sf9KsggBzXGBelCZpsInuQPAeHIX2D10x1LoGvrfSHWlOL9giTguyu7RxfjCi9Wm40JvfmnTUX6p0cAS2aYzZYisSFzyex7qDJtsj4mvZH40~p3QJ4IBL1wHVyMvEZUP3~avojrCgfDiqd9jzLUsP1Nl~Rqnmb~joFSxCC68XKDnZi3WfHPtNmqFQfWs05mExZs0pdXt~nio0n9Kli0gsUmBie1Cgma3tWvSqYIkIQwTfaDbshgiB7zVBW6Pw7NAo17IS01S5AJj8dqgESxH2hdrLWNM~wS5NLOK52H1UoE40OYw__')`,
          }}
        >
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Onde a Cidade Desacelera
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
              Santa Rita do Sapucaí – MG
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-sm md:text-base text-white/80 font-light max-w-2xl mx-auto drop-shadow-md">
                EDITAL FOMENTO CIDADE CRIATIVA CIDADE FELIZ 2026
              </p>
              <p className="text-sm md:text-base text-white/80 font-light drop-shadow-md">
                PROJETOS CULTURAIS – CHAMADA PÚBLICA 001/2026
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Descubra Santa Rita
                </h2>
                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                  Explore o coração cultural da cidade através de nosso mapa interativo. Clique no marcador central para conhecer mais sobre o projeto.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização Central</h3>
                    <p className="text-sm text-foreground/60">
                      Centro de Santa Rita do Sapucaí
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold">🎬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Conteúdo Multimídia</h3>
                    <p className="text-sm text-foreground/60">
                      Clique no marcador para assistir ao vídeo do projeto
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">🌟</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Projeto Cultural</h3>
                    <p className="text-sm text-foreground/60">
                      Celebrando a criatividade e o desaceleramento urbano
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[500px] bg-muted">
                <MapView
                  initialCenter={SANTA_RITA_CENTER}
                  initialZoom={15}
                  onMapReady={handleMapReady}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Projeto: Onde a Cidade Desacelera
              </h2>
              <p className="text-xl text-foreground/70 font-light">
                Uma iniciativa cultural que celebra o desaceleramento urbano
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl">🏙️</div>
                <h3 className="text-xl font-semibold text-foreground">Cidade Criativa</h3>
                <p className="text-foreground/60 text-sm">
                  Fomentando a criatividade e expressão cultural em Santa Rita
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl">😊</div>
                <h3 className="text-xl font-semibold text-foreground">Cidade Feliz</h3>
                <p className="text-foreground/60 text-sm">
                  Promovendo bem-estar e qualidade de vida para a comunidade
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl">🎨</div>
                <h3 className="text-xl font-semibold text-foreground">Projetos Culturais</h3>
                <p className="text-foreground/60 text-sm">
                  Edital Fomento Cidade Criativa Cidade Feliz 2026 – Chamada Pública 001/2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Explore o Mapa
              </h2>
              <p className="text-lg text-foreground/70 font-light">
                Clique no marcador no mapa acima para assistir ao vídeo do projeto e conhecer mais sobre esta iniciativa cultural.
              </p>
            </div>
            <Button
              onClick={() => setShowVideoModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Assistir ao Vídeo
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="Projeto: Onde a Cidade Desacelera"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 text-sm">
            © 2026 Projeto: Onde a Cidade Desacelera
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Santa Rita do Sapucaí – MG | Edital Fomento Cidade Criativa Cidade Feliz 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
