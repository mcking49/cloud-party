export const PUBLIC_PATHS = ["/sign-in*", "/sign-up*"] as const;

export type PublicPath = (typeof PUBLIC_PATHS)[number];

export function isPublicPath(path: string): path is PublicPath {
  return !!PUBLIC_PATHS.find((publicPath) =>
    path.match(new RegExp(`^${publicPath}$`.replace("*$", "($|/)"))),
  );
}
