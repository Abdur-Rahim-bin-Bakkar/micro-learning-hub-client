"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  CreditCard,
  LifeBuoy,
  Award,
  ArrowRight,
} from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Create Account",
    description: "Register your profile to initiate your learning journey.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Complete Payment",
    description: "Make a secure payment to officially become a student.",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Dedicated Support",
    description: "Get immediate help by posting directly to our Help Desk.",
    icon: LifeBuoy,
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete your courses successfully and earn your certificate.",
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0B0F14] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Start your learning journey in four simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/[0.07]"
              >
                {/* Background Step Number */}
                <div className="absolute right-6 top-5 select-none text-5xl font-black text-white/5 transition-colors duration-300 group-hover:text-blue-500/10">
                  0{step.id}
                </div>

                {/* Icon Wrapper */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>

                {/* Flow Arrow (Hidden on final step and screens smaller than lg) */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 z-10 lg:block xl:-right-5">
                    <ArrowRight
                      size={20}
                      className="text-blue-500 animate-pulse"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}