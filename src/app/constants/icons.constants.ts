import { IconInfo } from '@interfaces/iconInfo.interface';

enum IconType {
  arrowToLeft = 'arrowToLeft',
  signOut = 'signOut',
  folder = 'folder',
  download = 'download',
  share = 'share',
  edit = 'edit',
  delete = 'delete',
}

const IconsList: { [key in IconType]: IconInfo } = {
  [IconType.arrowToLeft]: {
    link: 'assets/icons/arrow-to-left.svg',
    description: 'arrow to left icon',
  },
  [IconType.signOut]: {
    link: 'assets/icons/sign-out.svg',
    description: 'sign out icon',
  },
  [IconType.folder]: {
    link: 'assets/icons/folder.svg',
    description: 'folder icon',
  },
  [IconType.download]: {
    link: 'assets/icons/download.svg',
    description: 'download icon',
  },
  [IconType.share]: {
    link: 'assets/icons/share.svg',
    description: 'share icon',
  },
  [IconType.edit]: {
    link: 'assets/icons/edit.svg',
    description: 'edit icon',
  },
  [IconType.delete]: {
    link: 'assets/icons/delete.svg',
    description: 'delete icon',
  },
};

export { IconsList };
