"use client";

import { motion } from "framer-motion";
import { Users, Heart, UserPlus, Calendar } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Meet New People",
    description: "Connect with fellow runners and expand your running community",
  },
  {
    icon: UserPlus,
    title: "Follow on Social Media",
    description: "Stay connected with your running crew beyond race day",
  },
  {
    icon: Heart,
    title: "See Who's Single",
    description: "Make meaningful connections with relationship status visibility",
  },
  {
    icon: Calendar,
    title: "Weekly Runs",
    description: "Make Fan Stride your go-to app for every group run",
  },
];

export default function RunClubSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make Fan Stride Your Run Club Essential
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Have your Run Club use Fan Stride every week
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your weekly runs into social experiences where you can meet new people, 
            follow each other on social media, and see who's single and who's not.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Perfect for run clubs of any size - from small neighborhood groups to large city-wide communities
          </p>
          <a
            href="#cta"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started with Your Run Club
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
