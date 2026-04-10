import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ title, subtitle, className, align = 'center' }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-24",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <div className={cn(
          "flex items-center gap-3",
          align === 'center' ? "justify-center" : ""
        )}>
          <div className="h-px w-8 bg-blue-600/30" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
            Navigation
          </span>
          <div className="h-px w-8 bg-blue-600/30" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
          {title}
        </h2>
        
        {subtitle && (
          <p className={cn(
            "text-slate-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed opacity-80",
            align === 'center' ? "mx-auto" : ""
          )}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeading;
