import { type ReactNode } from "react";

import { Button, IconPlus } from "@cloud-party/ui";

interface Props {
  ctaLabel: string;
  icon: ReactNode;
  message: string;
  title: string;
  onClickCta: () => void;
}

export const NoItemsWithCTA = ({
  ctaLabel,
  icon,
  message,
  title,
  onClickCta,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <span>{icon}</span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1">{message}</p>

      <Button
        className="mt-5 flex items-center justify-between gap-2"
        onClick={onClickCta}
      >
        <IconPlus className="h-6 w-6" />
        <span>{ctaLabel}</span>
      </Button>
    </div>
  );
};
