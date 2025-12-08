import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, delay = 0 }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-7 w-7" />
      </div>
      
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ServiceCard;
