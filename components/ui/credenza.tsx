"use client";

import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/tailwind-utils";

type BaseProps = {
  children: React.ReactNode;
};

interface RootCredenzaProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface CredenzaProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const CredenzaContext = React.createContext<{ isMobile: boolean }>({
  isMobile: true,
});

const useCredenzaContext = () => {
  const context = React.useContext(CredenzaContext);
  if (!context) {
    throw new Error(
      "Credenza components cannot be rendered outside the Credenza Context"
    );
  }
  return context;
};

const Credenza = ({ children, ...props }: RootCredenzaProps) => {
  const isMobile = useIsMobile();
  const CredenzaPrimitive = isMobile ? Drawer : Dialog;

  return (
    <CredenzaContext.Provider value={{ isMobile }}>
      <CredenzaPrimitive {...props} {...(!isMobile && { autoFocus: true })}>
        {children}
      </CredenzaPrimitive>
    </CredenzaContext.Provider>
  );
};

const CredenzaTrigger = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaTriggerPrimitive = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <CredenzaTriggerPrimitive className={className} {...props}>
      {children}
    </CredenzaTriggerPrimitive>
  );
};

const CredenzaClose = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaClosePrimitive = isMobile ? DrawerClose : DialogClose;

  return (
    <CredenzaClosePrimitive className={className} {...props}>
      {children}
    </CredenzaClosePrimitive>
  );
};

const CredenzaContent = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaContentPrimitive = isMobile ? DrawerContent : DialogContent;

  return (
    <CredenzaContentPrimitive className={className} {...props}>
      {children}
    </CredenzaContentPrimitive>
  );
};

const CredenzaDescription = ({
  className,
  children,
  ...props
}: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaDescriptionPrimitive = isMobile
    ? DrawerDescription
    : DialogDescription;

  return (
    <CredenzaDescriptionPrimitive className={className} {...props}>
      {children}
    </CredenzaDescriptionPrimitive>
  );
};

const CredenzaHeader = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaHeaderPrimitive = isMobile ? DrawerHeader : DialogHeader;

  return (
    <CredenzaHeaderPrimitive className={className} {...props}>
      {children}
    </CredenzaHeaderPrimitive>
  );
};

const CredenzaTitle = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaTitlePrimitive = isMobile ? DrawerTitle : DialogTitle;

  return (
    <CredenzaTitlePrimitive className={className} {...props}>
      {children}
    </CredenzaTitlePrimitive>
  );
};

const CredenzaBody = ({ className, children, ...props }: CredenzaProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const CredenzaFooter = ({ className, children, ...props }: CredenzaProps) => {
  const { isMobile } = useCredenzaContext();
  const CredenzaFooterPrimitive = isMobile ? DrawerFooter : DialogFooter;

  return (
    <CredenzaFooterPrimitive className={className} {...props}>
      {children}
    </CredenzaFooterPrimitive>
  );
};

export {
  Credenza,
  CredenzaTrigger,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
  CredenzaFooter,
};
