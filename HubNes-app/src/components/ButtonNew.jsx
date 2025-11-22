import { Icon } from "@iconify/react";

export const ButtonNew = ({ linkNoticia }) => {
  return (
    <a
      href={linkNoticia}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
      style={{ fontSize: "0.9rem" }}
    >
      Leer más
      <Icon icon="mingcute:external-link-line" width="20" height="20" />
    </a>
  );
};
