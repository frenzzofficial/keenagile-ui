import Image from "next/image";
import { testimonials } from "@/packages/data/data.hero";

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  return (
    <div className="shrink-0 w-[350px] bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15 rounded-xl p-6 border border-border/50 shadow-sm mx-1.5">
      <p className="text-muted-foreground mb-4 font-medium">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
