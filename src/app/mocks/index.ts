import { SidenavSection } from "../models/sidenav-section";


export class Mocks {

  public sideNavSectionList: Array<SidenavSection> = [
    {
      sectionName: 'Menu',
      sectionButtonList: [
        {
          iconName: 'explore',
          buttonText: 'Browse'
        },
        {
          iconName: 'favorite_border',
          buttonText: 'Watchlist'
        },
        {
          iconName: 'shopping_basket',
          buttonText: 'Comming soon'
        }
      ]
    },
    {
      sectionName: 'Social',
      sectionButtonList: [
        {
          iconName: 'person',
          buttonText: 'Friends'
        },
        {
          iconName: 'group',
          buttonText: 'Parties'
        }
      ]
    },
    {
      sectionName: 'General',
      sectionButtonList: [
        {
          iconName: 'settings',
          buttonText: 'Settings'
        },
        {
          iconName: 'logout',
          buttonText: 'Logout'
        }
      ]
    },
  ];
}
