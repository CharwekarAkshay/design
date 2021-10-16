create table configurations (
    id String,
    configurationName String,
    configurationData String,
);

INSERT into configurations values ('sidenavConfiguration', '[
                                                                {
                                                                    "icon": "pi-search",
                                                                    "label": "Search",
                                                                    "routerLink": "search"
                                                                },
                                                                {
                                                                    "icon": "pi-home",
                                                                    "label": "Home",
                                                                    "routerLink": "home"
                                                                },
                                                                {
                                                                    "icon": "pi-desktop",
                                                                    "label": "Browse",
                                                                    "routerLink": "browse"
                                                                },
                                                                {
                                                                    "icon": "pi-calendar",
                                                                    "label": "Upcoming Movies",
                                                                    "routerLink": "upcoming-movies"
                                                                },
                                                                {
                                                                    "icon": "pi-list",
                                                                    "label": "Watch List",
                                                                    "routerLink": "favorite"
                                                                },
                                                                {
                                                                    "icon": "pi-cog",
                                                                    "label": "Settings",
                                                                    "routerLink": "settings"
                                                                }
                                                            ]');