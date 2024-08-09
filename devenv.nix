{pkgs, ...}: {
  packages = [
    pkgs.mdbook
    pkgs.mdbook-alerts
    pkgs.mdbook-mermaid
  ];

  processes = {
    mdbook.exec = "mdbook serve";
  };
}
