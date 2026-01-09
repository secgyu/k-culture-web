export const queryKeys = {
  actors: {
    all: ["actors"] as const,
    lists: () => [...queryKeys.actors.all, "list"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.actors.lists(), { filters }] as const,
    details: () => [...queryKeys.actors.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.actors.details(), id] as const,
  },

  projects: {
    all: ["projects"] as const,
    lists: () => [...queryKeys.projects.all, "list"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.projects.lists(), { filters }] as const,
    details: () => [...queryKeys.projects.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.projects.details(), id] as const,
  },

  favorites: {
    all: ["favorites"] as const,
    lists: () => [...queryKeys.favorites.all, "list"] as const,
    list: (type?: string) => [...queryKeys.favorites.lists(), { type }] as const,
  },

  jobs: {
    all: ["jobs"] as const,
    lists: () => [...queryKeys.jobs.all, "list"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.jobs.lists(), { filters }] as const,
    details: () => [...queryKeys.jobs.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.jobs.details(), id] as const,
  },

  notice: {
    all: ["notice"] as const,
    lists: () => [...queryKeys.notice.all, "list"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.notice.lists(), { filters }] as const,
    details: () => [...queryKeys.notice.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.notice.details(), id] as const,
  },

  dashboard: {
    all: ["dashboard"] as const,
    stats: (userType?: string) => [...queryKeys.dashboard.all, "stats", { userType }] as const,
  },

  profile: {
    all: ["profile"] as const,
    me: () => [...queryKeys.profile.all, "me"] as const,
  },

  settings: {
    all: ["settings"] as const,
    notifications: () => [...queryKeys.settings.all, "notifications"] as const,
  },
} as const;

export const invalidateKeys = {
  actors: () => queryKeys.actors.all,
  projects: () => queryKeys.projects.all,
  favorites: () => queryKeys.favorites.all,
  jobs: () => queryKeys.jobs.all,
  notice: () => queryKeys.notice.all,
  dashboard: () => queryKeys.dashboard.all,
  profile: () => queryKeys.profile.all,
  settings: () => queryKeys.settings.all,
} as const;