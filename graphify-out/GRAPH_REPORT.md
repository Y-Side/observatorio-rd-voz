# Graph Report - .  (2026-08-12)

## Corpus Check
- Corpus is ~18,122 words - fits in a single context window. You may not need a graph.

## Summary
- 568 nodes · 703 edges · 81 communities (34 shown, 47 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.54)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- input Module
- FeedbackSection Module
- eslint Module
- DOM Module
- react Module
- sonner Module
- accordion Module
- components.json Module
- error-capture Module
- buttonVariants Module
- command Module
- menubar Module
- cmdk Module
- package.json Module
- Lovable Module
- context-menu Module
- dropdown-menu Module
- alert-dialog Module
- table Module
- breadcrumb Module
- drawer Module
- navigation-menu Module
- select Module
- card Module
- toggle Module
- alert Module
- input-otp Module
- avatar Module
- badge Module
- tabs Module
- scroll-area Module
- class-variance-authority Module
- clsx Module
- date-fns Module
- embla-carousel-react Module
- @hookform/resolvers Module
- input-otp Module
- lucide-react Module
- @radix-ui/react-accordion Module
- @radix-ui/react-alert-dialog Module
- @radix-ui/react-aspect-ratio Module
- @radix-ui/react-checkbox Module
- @radix-ui/react-collapsible Module
- @radix-ui/react-context-menu Module
- @radix-ui/react-dialog Module
- @radix-ui/react-dropdown-menu Module
- @radix-ui/react-hover-card Module
- @radix-ui/react-label Module
- @radix-ui/react-menubar Module
- @radix-ui/react-popover Module
- @radix-ui/react-progress Module
- @radix-ui/react-scroll-area Module
- @radix-ui/react-select Module
- @radix-ui/react-separator Module
- @radix-ui/react-slider Module
- @radix-ui/react-slot Module
- @radix-ui/react-switch Module
- @radix-ui/react-tabs Module
- @radix-ui/react-toggle Module
- @radix-ui/react-toggle-group Module
- @radix-ui/react-tooltip Module
- react-day-picker Module
- react-dom Module
- react-hook-form Module
- react-resizable-panels Module
- sonner Module
- tailwind-merge Module
- tailwindcss Module
- @tanstack/react-query Module
- @tanstack/react-router Module
- @tanstack/react-start Module
- @tanstack/router-plugin Module
- tw-animate-css Module
- vaul Module
- vite-tsconfig-paths Module
- zod Module
- Permitted Web Crawlers Module

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `compilerOptions` - 22 edges
3. `react` - 8 edges
4. `scripts` - 7 edges
5. `Button` - 7 edges
6. `aliases` - 6 edges
7. `buttonVariants` - 6 edges
8. `tailwind` - 5 edges
9. `renderErrorPage()` - 5 edges
10. `normalizeCatastrophicSsrResponse()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Public Homepage` --semantically_similar_to--> `TanStack Start File-Based Routing`  [INFERRED] [semantically similar]
  README.md → src/routes/README.md
- `CalendarDayButton()` --references--> `react`  [EXTRACTED]
  src/components/ui/calendar.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json

## Import Cycles
- None detected.

## Communities (81 total, 47 thin omitted)

### Community 0 - "input Module"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 1 - "FeedbackSection Module"
Cohesion: 0.06
Nodes (30): EMPTY, Errors, Experience, EXPERIENCES, FeedbackSection(), inputClasses(), PROVINCES, Service (+22 more)

### Community 2 - "eslint Module"
Cohesion: 0.06
Nodes (35): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @lovable.dev/vite-tanstack-config (+27 more)

### Community 3 - "DOM Module"
Cohesion: 0.06
Nodes (31): DOM, DOM.Iterable, ES2022, eslint.config.js, src/**/*.ts, src/**/*.tsx, vite/client, vite.config.ts (+23 more)

### Community 4 - "react Module"
Cohesion: 0.07
Nodes (24): react, react, useCarousel(), ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent (+16 more)

### Community 5 - "sonner Module"
Cohesion: 0.09
Nodes (22): Toaster(), ToasterProps, LovableErrorOptions, LovableEvents, reportLovableError(), Window, getRouter(), Route (+14 more)

### Community 6 - "accordion Module"
Cohesion: 0.09
Nodes (12): AccordionContent, AccordionItem, AccordionTrigger, Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup (+4 more)

### Community 7 - "components.json Module"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 8 - "error-capture Module"
Cohesion: 0.17
Nodes (13): consumeLastCapturedError(), describeError(), describeStatus(), originalConsoleError, safeStringify(), renderErrorPage(), fetch(), getServerEntry() (+5 more)

### Community 9 - "buttonVariants Module"
Cohesion: 0.21
Nodes (14): buttonVariants, Calendar(), CalendarDayButton(), Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink() (+6 more)

### Community 10 - "command Module"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 11 - "menubar Module"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 12 - "cmdk Module"
Cohesion: 0.15
Nodes (13): cmdk, dependencies, cmdk, @radix-ui/react-avatar, @radix-ui/react-navigation-menu, @radix-ui/react-radio-group, recharts, @tailwindcss/vite (+5 more)

### Community 13 - "package.json Module"
Cohesion: 0.17
Nodes (11): name, private, scripts, build, build:dev, dev, format, lint (+3 more)

### Community 14 - "Lovable Module"
Cohesion: 0.18
Nodes (11): Lovable, Lovable Git Synchronization, Academic Project Notice, Citizen Service Feedback, Frontend-Only Prototype, Observatorio RD, Public Homepage, React TypeScript Tailwind Stack (+3 more)

### Community 15 - "context-menu Module"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 16 - "dropdown-menu Module"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 17 - "alert-dialog Module"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 18 - "table Module"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 19 - "breadcrumb Module"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 20 - "drawer Module"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 21 - "navigation-menu Module"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 22 - "select Module"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 23 - "card Module"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 24 - "toggle Module"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 25 - "alert Module"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 26 - "input-otp Module"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 27 - "avatar Module"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 28 - "badge Module"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 29 - "tabs Module"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

## Knowledge Gaps
- **323 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `css` (+318 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **47 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `cmdk Module` to `react Module`, `package.json Module`, `class-variance-authority Module`, `clsx Module`, `date-fns Module`, `embla-carousel-react Module`, `@hookform/resolvers Module`, `input-otp Module`, `lucide-react Module`, `@radix-ui/react-accordion Module`, `@radix-ui/react-alert-dialog Module`, `@radix-ui/react-aspect-ratio Module`, `@radix-ui/react-checkbox Module`, `@radix-ui/react-collapsible Module`, `@radix-ui/react-context-menu Module`, `@radix-ui/react-dialog Module`, `@radix-ui/react-dropdown-menu Module`, `@radix-ui/react-hover-card Module`, `@radix-ui/react-label Module`, `@radix-ui/react-menubar Module`, `@radix-ui/react-popover Module`, `@radix-ui/react-progress Module`, `@radix-ui/react-scroll-area Module`, `@radix-ui/react-select Module`, `@radix-ui/react-separator Module`, `@radix-ui/react-slider Module`, `@radix-ui/react-slot Module`, `@radix-ui/react-switch Module`, `@radix-ui/react-tabs Module`, `@radix-ui/react-toggle Module`, `@radix-ui/react-toggle-group Module`, `@radix-ui/react-tooltip Module`, `react-day-picker Module`, `react-dom Module`, `react-hook-form Module`, `react-resizable-panels Module`, `sonner Module`, `tailwind-merge Module`, `tailwindcss Module`, `@tanstack/react-query Module`, `@tanstack/react-router Module`, `@tanstack/react-start Module`, `@tanstack/router-plugin Module`, `tw-animate-css Module`, `vaul Module`, `vite-tsconfig-paths Module`, `zod Module`?**
  _High betweenness centrality (0.388) - this node is a cross-community bridge._
- **Why does `cn()` connect `buttonVariants Module` to `input Module`, `FeedbackSection Module`, `react Module`, `accordion Module`, `command Module`, `menubar Module`, `context-menu Module`, `dropdown-menu Module`, `alert-dialog Module`, `table Module`, `breadcrumb Module`, `drawer Module`, `navigation-menu Module`, `select Module`, `card Module`, `toggle Module`, `alert Module`, `input-otp Module`, `avatar Module`, `badge Module`, `tabs Module`, `scroll-area Module`?**
  _High betweenness centrality (0.355) - this node is a cross-community bridge._
- **Why does `react` connect `react Module` to `input Module`, `buttonVariants Module`, `cmdk Module`?**
  _High betweenness centrality (0.330) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _323 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `input Module` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Should `FeedbackSection Module` be split into smaller, more focused modules?**
  _Cohesion score 0.05813953488372093 - nodes in this community are weakly interconnected._
- **Should `eslint Module` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._