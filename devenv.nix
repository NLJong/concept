{pkgs, ...}: {
  packages = [
    pkgs.dprint

    pkgs.mdbook
    pkgs.mdbook-alerts
    pkgs.mdbook-mermaid
  ];

  processes = {
    mdbook.exec = "mdbook serve";
  };
}
