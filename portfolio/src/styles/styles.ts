export const heroStyles = {
  section: "w-full flex flex-col items-center lg:items-start gap-6",
  avatarWrapper:
    "relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden ring-2 ring-foreground/10 mx-auto lg:mx-0",
  textWrapper: "text-center lg:text-left max-w-xl",
  titleRow: "flex items-center gap-3 justify-center lg:justify-start",
  title: "text-2xl sm:text-3xl font-semibold tracking-tight",
  pitch: "mt-3 text-sm sm:text-base leading-6 text-foreground/70",
  actions: "mt-4 flex items-center gap-3",
  actionIcon: "w-4 h-4",
  techsWrap: "mt-6 w-full",
  techsTitle: "text-sm font-medium text-foreground/70 mb-3",
  groupsGrid: "grid grid-cols-2 gap-x-2 gap-y-8",
  groupCard:
    "rounded-lg border border-foreground/15 shadow-sm bg-gradient-to-b from-foreground/5 to-transparent p-8",
  groupCardPadMore: "p-7",
  groupTitle: "text-base font-semibold text-foreground mb-4",
  techsList: "flex flex-wrap gap-2",
  techGrid: "grid grid-cols-3 gap-x-10 gap-y-6 justify-items-start",
  techGrid2: "grid grid-cols-3 gap-x-10 gap-y-6 justify-items-start",
  techItem: "flex flex-col items-center gap-2 text-center min-w-0 px-1 w-full",
  techBadge:
    "text-xs px-2 py-0.5 rounded-full border border-foreground/15 inline-flex items-center gap-1.5",
  techIconBadgeWrap: "w-6 h-6 grid place-items-center",
  techIcon: "w-6 h-6 object-contain",
  techIconWrap: "w-12 h-12 grid place-items-center",
  techIconLg: "w-12 h-12 object-contain shrink-0",
  techLabel: "block text-xs text-foreground/80 text-center leading-tight break-words max-w-[110px]",
} as const;

export const projectsStyles = {
  container: "relative",
  scroller: "overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]",
  scrollerInner: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full",
  card: "flex flex-col",
  clickable: "cursor-pointer",
  imageWrap: "relative w-full h-40",
  imageWrapLg: "relative w-full h-60 sm:h-72",
  body: "flex flex-col gap-2 flex-1",
  name: "font-medium text-lg",
  desc: "text-sm text-foreground/80 flex-1",
  header: "flex items-center gap-2",
  chevron: "w-4 h-4 ml-auto transition-transform",
  chevronOpen: "rotate-90",
  details: "mt-2 space-y-2",
  tags: "mt-1 flex flex-wrap gap-2",
  tag: "text-xs px-2 py-0.5 rounded-full border border-foreground/15",
  links: "mt-3 flex gap-3",
  link: "text-sm underline hover:no-underline",
  actions: "flex justify-center mt-6",
  btn: "text-sm rounded-full border border-foreground/15 px-3 py-1 hover:bg-foreground/5",
} as const;

export const certificatesStyles = {
  list: "space-y-3",
  item: "flex items-start justify-between gap-4",
  itemTitle: "font-medium",
  meta: "text-sm text-foreground/70",
  link: "text-sm underline hover:no-underline",
} as const;

export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 text-sm rounded-full transition-colors",
  ghost: "underline hover:no-underline px-0 py-0 text-foreground",
  outline: "border border-foreground/25 px-3 py-1 hover:bg-foreground/10",
  solid: "bg-foreground text-background px-3 py-1 hover:opacity-90",
} as const;

export const cardStyles = {
  card: "border border-foreground/10 rounded-md overflow-hidden bg-background",
  body: "p-4",
} as const;

export const sectionStyles = {
  section: "w-full",
  title: "text-xl sm:text-2xl font-semibold mb-4",
} as const;


