"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import {
  FaWhatsapp,
  FaMountain,
  FaArrowRight,
  FaStar,
  FaCamera,
  FaLeaf,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiForestCamp, GiTeapot } from "react-icons/gi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  const galleryImages = [
    "/images/tour1.jpg",
    "/images/tour2.jpg",
    "/images/tour3.jpg",
    "/images/tour4.jpg",
    "/images/tour5.jpg",
    "/images/tour6.jpg",
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore",
      rating: 5,
      text: "The Mossy Forest tour was absolutely magical! Our guide was incredibly knowledgeable and the Land Rover experience made it unforgettable.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100",
    },
    {
      name: "Ahmad Rahman",
      location: "Kuala Lumpur",
      rating: 5,
      text: "Best decision ever! The tea plantation visit and mountain views were breathtaking. Highly recommend for nature lovers.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
    },
    {
      name: "Lisa Wong",
      location: "Penang",
      rating: 5,
      text: "Professional service from start to finish. The photography spots were perfect and our guide captured amazing moments for us.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-8">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full text-white text-sm font-semibold tracking-wide">
              🌿 Premium Nature Experiences
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
          >
            Discover Cameron
            <br />
            <span className="animate-glow text-gradient">Highlands</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in Malaysia's most enchanting mountain paradise.
            Where ancient forests meet breathtaking vistas and unforgettable
            adventures await.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="https://wa.me/60196592141"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
              Start Your Adventure
            </a>
            <a
              href="#gallery"
              className="btn-secondary flex gap-2 items-center"
            >
              Explore Gallery
              <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Experience Cameron Highlands like never before with our
              expert-guided adventures
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: FaCamera,
                title: "Professional Photography",
                description:
                  "Capture stunning moments with our photography expertise and perfect Instagram spots throughout the journey.",
              },
              {
                icon: GiForestCamp,
                title: "Expert Local Guides",
                description:
                  "Knowledgeable guides with deep understanding of Cameron Highlands' flora, fauna, and hidden gems.",
              },
              {
                icon: FaLeaf,
                title: "Eco-Friendly Tours",
                description:
                  "Sustainable tourism practices ensuring the preservation of this natural paradise for future generations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                  {feature.title}
                </h3>

                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Swiper */}
      <section
        id="gallery"
        className="py-24 px-6 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Visual Journey</h2>
            <p className="section-subtitle">
              Swipe through breathtaking moments captured in Cameron Highlands
            </p>
          </motion.div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: "600px" }}
            >
              {galleryImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-full">
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-8">
            <Swiper
              modules={[Thumbs]}
              spaceBetween={10}
              slidesPerView={6}
              watchSlidesProgress
              className="thumbs-gallery"
            >
              {galleryImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-square rounded-lg overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-blue-900/20 relative overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">
              Ready for Your Highland Adventure?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Every great journey begins with a single message. Let's create
              memories that will last a lifetime in Cameron Highlands.
            </p>
            <a
              href="https://wa.me/60196592141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary text-xl"
            >
              <FaWhatsapp className="text-3xl" />
              Plan Your Trip Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 backdrop-blur-xl border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-gradient mb-4">
                Cameron Highlands Tours
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Crafting unforgettable mountain adventures and nature
                experiences in Malaysia's most mystical destination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 text-white">Explore</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Mossy Forest Tours</li>
                <li>Mountain Trekking</li>
                <li>Photography Tours</li>
                <li>Tea Plantations</li>
                <li>Eco Adventures</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Private Tours</li>
                <li>Group Adventures</li>
                <li>Photography Packages</li>
                <li>Custom Experiences</li>
                <li>Transportation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <a
                href="https://wa.me/60196592141"
                className="text-cyan-400 hover:text-blue-400 transition-colors font-bold flex items-center gap-2 mb-4"
              >
                <FaWhatsapp /> +60 19-659 2141
              </a>
              <p className="text-slate-400 text-sm mb-4">
                Cameron Highlands, Pahang, Malaysia
              </p>
              <p className="text-slate-500 text-xs">
                Available 24/7 for inquiries
              </p>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-white/10 pt-8 text-center text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">
              © 2024 Cameron Highlands Tours. Crafting mountain memories with
              passion.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
