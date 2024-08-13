import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon
  },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <StyledLink key={link.name} href={link.href} active={pathname === link.href}>
            <LinkIcon />
            {link.name}
          </StyledLink>
        );
      })}
    </>
  );
}

const StyledLink = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: .5rem;

  ${props => props.active && `
    background: rgba(255,255,255,.16);
  `}

  svg {
    display: block;
    width: 1.5rem;
    height: auto;
  }
`