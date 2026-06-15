import { Link } from "react-router-dom";

export type FooterLinkColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

export const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <nav aria-label={title}>
      <h4 className="font-sans text-[12px] font-semibold uppercase text-text-inverse m-0 mb-5 tracking-wider footer-title-accent">
        {title}
      </h4>
      <ul className="list-none p-0 m-0 flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="footer-link font-sans text-[13px] font-normal text-text-inverse-muted no-underline inline-flex items-center py-1.5"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
