import Image from 'next/image';

export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: '/gallery/gallery1.webp',
      alt: 'Driving training 1',
    },
    {
      id: 2,
      src: '/gallery/gallery2.webp',
      alt: 'Driving training 2',
    },
    {
      id: 3,
      src: '/gallery/gallery3.webp',
      alt: 'Driving training 3',
    },
    {
      id: 4,
      src: '/gallery/gallery4.webp',
      alt: 'Driving training 4',
    },
    {
      id: 5,
      src: '/gallery/gallery5.webp',
      alt: 'Driving training 5',
    },
    {
      id: 6,
      src: '/gallery/gallery6.webp',
      alt: 'Driving training 6',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-72 rounded-xl overflow-hidden border border-border bg-black flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-200"
          >
            See More Photos on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}